// TODO [FE2-05a] @Elena — Prenosi: Forma za prenos izmedju racuna
// TODO [FE2-05b] @Elena — Prenosi: Verifikacija prenosa
// TODO [FE2-08a] @Antonije — Transferi: Kreiranje transfera
// TODO [FE2-08b] @Antonije — Transferi: Istorija i prikaz kursa/provizije
//
// Ova stranica omogucava prenos sredstava izmedju sopstvenih racuna.
// - Forma: izaberi racun posiljaoca, izaberi racun primaoca, iznos
// - Ako su valute razlicite => prikazati kurs i konvertovani iznos
// - react-hook-form + zodResolver(transferSchema)
// - Nakon submit => transactionService.createTransfer()
// - Verifikacija putem VerificationModal
// - Spec: "Interni transfer" iz Celine 2

import { useSearchParams } from 'react-router-dom';

export default function TransferPage() {
  const [searchParams] = useSearchParams();
  const preselectedFrom = searchParams.get('from') || '';

  // TODO [FE2-05a] @Elena — Setup forme
  // useForm<TransferFormData>({ resolver: zodResolver(transferSchema) })
  // accountService.getMyAccounts() za oba dropdown-a

  // TODO [FE2-08a] @Antonije — State za kurs
  // useState za exchangePreview (convertedAmount, rate)
  // Kad se promeni fromAccount ili toAccount, proveriti valute
  // Ako valute razlicite => currencyService.getRate(fromCurrency, toCurrency)

  // TODO [FE2-05b] @Elena — State za verifikaciju
  // useState za showVerification, pendingTransactionId

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Prenos između računa</h1>

      {/* TODO [FE2-05a] @Elena — Forma za prenos
          Polja:
          1. Racun posiljaoca - Select (moji racuni, prikazati stanje i valutu)
          2. Racun primaoca - Select (moji racuni BEZ izabranog posiljaoca)
          3. Iznos - Input number

          Submit handler:
          - Validacija (zodResolver - racuni moraju biti razliciti)
          - transactionService.createTransfer(data)
          - Na uspeh: otvori VerificationModal */}
      <form className="space-y-4">
        <p className="text-muted-foreground">Implementirati formu za prenos...</p>
      </form>

      {/* TODO [FE2-08a] @Antonije — Preview konverzije
          - Prikazati samo kad su valute razlicite
          - Kartica: "Kurs: 1 EUR = 117.15 RSD"
          - "Konvertovani iznos: X RSD"
          - Azurirati kad se promeni iznos ili racuni */}

      {/* TODO [FE2-05b] @Elena — VerificationModal
          - <VerificationModal /> iz components/shared
          - onSuccess => navigate('/accounts') + success toast */}
    </div>
  );
}
