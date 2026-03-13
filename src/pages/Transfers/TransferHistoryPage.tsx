// TODO [FE2-08b] @Antonije - Transferi: Istorija transfera
//
// Ova stranica prikazuje hronolosku listu svih transfera korisnika.
// - transactionService.getTransfers(filters) sa paginacijom
// - Tabela: datum, sa racuna, na racun, iznos, valuta (from/to), kurs, provizija, status
// - Filteri: po datumu od-do, racunu
// - Paginacija
// - Spec: "Istorija transfera" iz Celine 2

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { accountService } from '@/services/accountService';
import { transactionService } from '@/services/transactionService';
import type { Account, Transfer } from '@/types/celina2';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function statusClass(status: string): string {
  if (status === 'COMPLETED') return 'bg-green-100 text-green-700';
  if (status === 'PENDING') return 'bg-yellow-100 text-yellow-700';
  if (status === 'REJECTED') return 'bg-red-100 text-red-700';
  if (status === 'CANCELLED') return 'bg-muted text-muted-foreground';
  return 'bg-muted text-muted-foreground';
}

export default function TransferHistoryPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [loading, setLoading] = useState(true);
  const [accountNumber, setAccountNumber] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const data = await accountService.getMyAccounts();
        setAccounts(data);
      } catch {
        toast.error('Neuspešno učitavanje računa.');
      }
    };

    loadAccounts();
  }, []);

  useEffect(() => {
    const loadTransfers = async () => {
      setLoading(true);
      try {
        const response = await transactionService.getTransfers({
          accountNumber: accountNumber || undefined,
          dateFrom: dateFrom || undefined,
          dateTo: dateTo || undefined,
          page,
          limit: 10,
        });
        setTransfers(response.content);
        setTotalPages(Math.max(1, response.totalPages));
      } catch {
        toast.error('Neuspešno učitavanje istorije transfera.');
      } finally {
        setLoading(false);
      }
    };

    loadTransfers();
  }, [accountNumber, dateFrom, dateTo, page]);

  useEffect(() => {
    setPage(0);
  }, [accountNumber, dateFrom, dateTo]);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Istorija transfera</h1>

      <Card>
        <CardHeader>
          <CardTitle>Filteri</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="account-filter" className="text-sm font-medium">Račun</label>
            <select
              id="account-filter"
              title="Račun"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Svi računi</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.accountNumber}>
                  {account.accountNumber}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="date-from" className="text-sm font-medium">Datum od</label>
            <input
              id="date-from"
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="date-to" className="text-sm font-medium">Datum do</label>
            <input
              id="date-to"
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <p className="text-muted-foreground">Učitavanje transfera...</p>
      ) : transfers.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-muted-foreground">Nema transfera za izabrane filtere.</CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Datum</th>
                  <th className="text-left py-2">Sa računa</th>
                  <th className="text-left py-2">Na račun</th>
                  <th className="text-left py-2">Iznos</th>
                  <th className="text-left py-2">Iz valute</th>
                  <th className="text-left py-2">U valutu</th>
                  <th className="text-left py-2">Kurs</th>
                  <th className="text-left py-2">Provizija</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr key={transfer.id} className="border-b">
                    <td className="py-2">{new Date(transfer.createdAt).toLocaleString('sr-RS')}</td>
                    <td className="py-2">{transfer.fromAccountNumber}</td>
                    <td className="py-2">{transfer.toAccountNumber}</td>
                    <td className="py-2">{transfer.amount.toFixed(2)}</td>
                    <td className="py-2">{transfer.fromCurrency}</td>
                    <td className="py-2">{transfer.toCurrency}</td>
                    <td className="py-2">{transfer.exchangeRate?.toFixed(4) ?? '-'}</td>
                    <td className="py-2">{transfer.commission?.toFixed(2) ?? '-'}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass(transfer.status)}`}>
                        {transfer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex items-center justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}>
                Prethodna
              </Button>
              <span className="text-sm text-muted-foreground">Strana {page + 1} / {totalPages}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
              >
                Sledeća
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

