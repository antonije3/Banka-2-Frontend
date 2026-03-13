//
// Ova stranica prikazuje kredite ulogovanog korisnika.
// - creditService.getMyLoans() za fetch
// - Lista: tip kredita, iznos, mesecna rata, preostali dug, status
// - Klik na kredit => expand/modal sa detaljima i ratama
// - creditService.getInstallments(loanId) za rate
// - Link na LoanApplicationPage za novi zahtev
// - Spec: "Krediti" iz Celine 2

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { creditService } from '@/services/creditService';
import type { Installment, Loan } from '@/types/celina2';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function statusStyles(status: Loan['status']): string {
  if (status === 'ACTIVE') return 'bg-green-100 text-green-700';
  if (status === 'PENDING') return 'bg-yellow-100 text-yellow-700';
  if (status === 'APPROVED') return 'bg-blue-100 text-blue-700';
  if (status === 'REJECTED') return 'bg-red-100 text-red-700';
  return 'bg-muted text-muted-foreground';
}

export default function LoanListPage() {
  const navigate = useNavigate();
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [loadingInstallments, setLoadingInstallments] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await creditService.getMyLoans();
        setLoans(data);
      } catch {
        toast.error('Neuspešno učitavanje kredita.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (!selectedLoan) {
      setInstallments([]);
      return;
    }

    const loadInstallments = async () => {
      setLoadingInstallments(true);
      try {
        const data = await creditService.getInstallments(selectedLoan.id);
        setInstallments(data);
      } catch {
        toast.error('Neuspešno učitavanje rata.');
      } finally {
        setLoadingInstallments(false);
      }
    };

    loadInstallments();
  }, [selectedLoan]);

  const paidInstallments = useMemo(
    () => installments.filter((installment) => installment.paid).length,
    [installments]
  );

  const progress = useMemo(() => {
    if (!selectedLoan || selectedLoan.amount <= 0) return 0;
    const paidPart = selectedLoan.amount - selectedLoan.remainingDebt;
    return Math.max(0, Math.min(100, (paidPart / selectedLoan.amount) * 100));
  }, [selectedLoan]);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Moji krediti</h1>
        <Button onClick={() => navigate('/loans/apply')}>Zahtev za kredit</Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Učitavanje kredita...</p>
      ) : loans.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-muted-foreground">Trenutno nema kredita.</CardContent>
        </Card>
      ) : (
        <section className="grid gap-4">
          {loans.map((loan) => {
            const isSelected = selectedLoan?.id === loan.id;
            return (
              <Card key={loan.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{loan.loanType} kredit</CardTitle>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles(loan.status)}`}>
                      {loan.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <p>
                      Iznos: <span className="font-medium">{loan.amount.toFixed(2)} {loan.currency}</span>
                    </p>
                    <p>
                      Mesečna rata: <span className="font-medium">{loan.monthlyPayment.toFixed(2)} {loan.currency}</span>
                    </p>
                    <p>
                      Preostali dug: <span className="font-medium">{loan.remainingDebt.toFixed(2)} {loan.currency}</span>
                    </p>
                    <p>
                      Period: <span className="font-medium">{loan.repaymentPeriod} meseci</span>
                    </p>
                  </div>
                  <progress
                    className="w-full h-2"
                    max={100}
                    value={Math.max(0, Math.min(100, ((loan.amount - loan.remainingDebt) / loan.amount) * 100 || 0))}
                  />
                  <Button variant="outline" onClick={() => setSelectedLoan(isSelected ? null : loan)}>
                    {isSelected ? 'Sakrij detalje' : 'Prikaži detalje'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>
      )}

      {selectedLoan && (
        <Card>
          <CardHeader>
            <CardTitle>Detalji kredita #{selectedLoan.loanNumber || selectedLoan.id}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2 md:grid-cols-2 text-sm">
              <p>Nominalna kamatna stopa: <span className="font-medium">{selectedLoan.nominalRate.toFixed(2)}%</span></p>
              <p>Efektivna kamatna stopa: <span className="font-medium">{selectedLoan.effectiveRate.toFixed(2)}%</span></p>
              <p>Početak: <span className="font-medium">{new Date(selectedLoan.startDate).toLocaleDateString('sr-RS')}</span></p>
              <p>Kraj: <span className="font-medium">{new Date(selectedLoan.endDate).toLocaleDateString('sr-RS')}</span></p>
            </div>

            <progress className="w-full h-2" max={100} value={progress} />

            {loadingInstallments ? (
              <p className="text-muted-foreground">Učitavanje rata...</p>
            ) : installments.length === 0 ? (
              <p className="text-muted-foreground">Nema dostupnih rata.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Rata</th>
                      <th className="text-left py-2">Iznos</th>
                      <th className="text-left py-2">Datum dospeća</th>
                      <th className="text-left py-2">Plaćeno</th>
                    </tr>
                  </thead>
                  <tbody>
                    {installments.map((installment, index) => (
                      <tr key={installment.id} className="border-b last:border-0">
                        <td className="py-2">{index + 1}</td>
                        <td className="py-2">{installment.amount.toFixed(2)} {installment.currency}</td>
                        <td className="py-2">{new Date(installment.expectedDueDate).toLocaleDateString('sr-RS')}</td>
                        <td className="py-2">{installment.paid ? 'Da' : 'Ne'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              Plaćeno rata: {paidInstallments} / {installments.length}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}


