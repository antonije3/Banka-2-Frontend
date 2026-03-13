// TODO [FE2-01a] @Marta - Pocetna strana: Pregled racuna i poslednjih 5 transakcija
// TODO [FE2-01b] @Marta - Pocetna strana: Brzo placanje widget
// TODO [FE2-01c] @Marta - Pocetna strana: Kursna lista widget
//
// Ova stranica je glavna strana nakon logina. Prikazuje:
// 1. Listu korisnikovih racuna sa stanjem (accountService.getMyAccounts)
// 2. Poslednjih 5 transakcija (transactionService.getAll sa limit=5)
// 3. Brzo placanje widget (skracena forma za placanje, otvara NewPaymentPage)
// 4. Kursna lista widget (currencyService.getExchangeRates)

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { accountService } from '@/services/accountService';
import { currencyService } from '@/services/currencyService';
import { paymentRecipientService } from '@/services/paymentRecipientService';
import { transactionService } from '@/services/transactionService';
import type { Account, ExchangeRate, PaymentRecipient, Transaction } from '@/types/celina2';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function HomePage() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recipients, setRecipients] = useState<PaymentRecipient[]>([]);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);

  const [quickFrom, setQuickFrom] = useState('');
  const [quickRecipient, setQuickRecipient] = useState('');
  const [quickAmount, setQuickAmount] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [myAccounts, recentTransactions, savedRecipients, rates] = await Promise.all([
          accountService.getMyAccounts(),
          transactionService.getAll({ page: 0, limit: 5 }),
          paymentRecipientService.getAll(),
          currencyService.getExchangeRates(),
        ]);

        setAccounts(myAccounts);
        setTransactions(recentTransactions.content);
        setRecipients(savedRecipients);
        setExchangeRates(rates.slice(0, 8));

        if (myAccounts.length > 0) {
          setQuickFrom(myAccounts[0].accountNumber);
        }
      } catch {
        toast.error('Neuspešno učitavanje početnih podataka.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const goToQuickPayment = () => {
    if (!quickFrom || !quickRecipient || !quickAmount) {
      toast.error('Popunite sva polja za brzo plaćanje.');
      return;
    }

    const selectedRecipient = recipients.find((r) => String(r.id) === quickRecipient);
    if (!selectedRecipient) {
      toast.error('Izaberite primaoca.');
      return;
    }

    navigate(
      `/payments/new?from=${encodeURIComponent(quickFrom)}&to=${encodeURIComponent(selectedRecipient.accountNumber)}&recipient=${encodeURIComponent(selectedRecipient.name)}&amount=${encodeURIComponent(quickAmount)}`
    );
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Dobrodošli</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Moji računi</h2>
        {loading ? (
          <p className="text-muted-foreground">Učitavanje računa...</p>
        ) : accounts.length === 0 ? (
          <p className="text-muted-foreground">Nemate otvorenih računa.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <Card key={account.id} className="cursor-pointer" onClick={() => navigate(`/accounts/${account.id}`)}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{account.name || `${account.accountType} račun`}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p>{account.accountNumber}</p>
                  <p>Tip: <span className="font-medium">{account.accountType}</span></p>
                  <p>Stanje: <span className="font-medium">{account.balance.toFixed(2)} {account.currency}</span></p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Poslednje transakcije</h2>
          <Button variant="outline" onClick={() => navigate('/payments/history')}>Vidi sve</Button>
        </div>
        {loading ? (
          <p className="text-muted-foreground">Učitavanje transakcija...</p>
        ) : transactions.length === 0 ? (
          <p className="text-muted-foreground">Nema nedavnih transakcija.</p>
        ) : (
          <Card>
            <CardContent className="pt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Datum</th>
                    <th className="text-left py-2">Primalac</th>
                    <th className="text-left py-2">Iznos</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b">
                      <td className="py-2">{new Date(tx.createdAt).toLocaleString('sr-RS')}</td>
                      <td className="py-2">{tx.recipientName}</td>
                      <td className="py-2">{tx.amount.toFixed(2)} {tx.currency}</td>
                      <td className="py-2">{tx.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Brzo plaćanje</h2>
        <Card>
          <CardContent className="pt-4 grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="quickFrom">Račun</Label>
              <select
                id="quickFrom"
                title="Račun"
                value={quickFrom}
                onChange={(e) => setQuickFrom(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Izaberite račun</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.accountNumber}>{account.accountNumber}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quickRecipient">Primalac</Label>
              <select
                id="quickRecipient"
                title="Primalac"
                value={quickRecipient}
                onChange={(e) => setQuickRecipient(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Izaberite primaoca</option>
                {recipients.map((recipient) => (
                  <option key={recipient.id} value={recipient.id}>{recipient.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quickAmount">Iznos</Label>
              <Input id="quickAmount" type="number" value={quickAmount} onChange={(e) => setQuickAmount(e.target.value)} />
            </div>
            <div className="md:col-span-3 flex justify-end">
              <Button onClick={goToQuickPayment}>Plati</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Kursna lista</h2>
          <Button variant="outline" onClick={() => navigate('/exchange')}>Menjačnica</Button>
        </div>
        {loading ? (
          <p className="text-muted-foreground">Učitavanje kurseva...</p>
        ) : exchangeRates.length === 0 ? (
          <p className="text-muted-foreground">Kursna lista nije dostupna.</p>
        ) : (
          <Card>
            <CardContent className="pt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Valuta</th>
                    <th className="text-left py-2">Kupovni</th>
                    <th className="text-left py-2">Prodajni</th>
                    <th className="text-left py-2">Srednji</th>
                  </tr>
                </thead>
                <tbody>
                  {exchangeRates.map((rate) => (
                    <tr key={rate.currency} className="border-b">
                      <td className="py-2">{rate.currency}</td>
                      <td className="py-2">{rate.buyRate.toFixed(4)}</td>
                      <td className="py-2">{rate.sellRate.toFixed(4)}</td>
                      <td className="py-2">{rate.middleRate.toFixed(4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}

