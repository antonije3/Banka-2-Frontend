// TODO [FE2-04a] @Luka — Placanja: Forma za novo placanje
// TODO [FE2-04b] @Luka — Placanja: Verifikacija placanja (OTP modal)
//
// Ova stranica sadrzi formu za kreiranje novog platnog naloga.
// - react-hook-form + zodResolver(newPaymentSchema)
// - Polja: racun posiljaoca (dropdown mojih racuna), racun primaoca, ime primaoca,
//   iznos, sifra placanja, svrha placanja, model, poziv na broj, referentni broj
// - Mogucnost biranja primaoca iz liste sacuvanih (paymentRecipientService.getAll)
// - Nakon submit => transactionService.createPayment()
// - Otvara VerificationModal za OTP potvrdu
// - Spec: "Novi platni nalog" stranica iz Celine 2

import { useSearchParams } from 'react-router-dom';

export default function NewPaymentPage() {
  const [searchParams] = useSearchParams();
  const preselectedAccount = searchParams.get('from') || '';

  // TODO [FE2-04a] @Luka — Setup forme
  // const form = useForm<NewPaymentFormData>({ resolver: zodResolver(newPaymentSchema) })
  // accountService.getMyAccounts() za dropdown racuna posiljaoca
  // paymentRecipientService.getAll() za dropdown sacuvanih primalaca

  // TODO [FE2-04b] @Luka — State za verifikaciju
  // const [showVerification, setShowVerification] = useState(false)
  // const [pendingTransactionId, setPendingTransactionId] = useState<number | null>(null)

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Novi platni nalog</h1>

      {/* TODO [FE2-04a] @Luka — Forma za placanje
          Form polja:
          1. Racun posiljaoca - Select dropdown (moji racuni sa stanjem)
          2. Racun primaoca - Input (18 cifara) ILI biranje iz sacuvanih primalaca
          3. Ime primaoca - Input (auto-fill ako izabran sacuvani primalac)
          4. Iznos - Input number
          5. Sifra placanja - Input (format 2xx)
          6. Svrha placanja - Textarea
          7. Model poziva na broj - Input (opciono, npr "97")
          8. Poziv na broj - Input (opciono)
          9. Referentni broj - Input (opciono)

          Submit handler:
          - Validira formu (zodResolver)
          - Poziva transactionService.createPayment(data)
          - Na uspeh: setPendingTransactionId(result.id), setShowVerification(true)
          - Na gresku: prikazati error toast */}
      <form className="space-y-4">
        <p className="text-muted-foreground">Implementirati formu za placanje...</p>
      </form>

      {/* TODO [FE2-04b] @Luka — VerificationModal
          - Prikazati kad showVerification === true
          - Proslediti transactionId={pendingTransactionId}
          - onSuccess => navigate('/payments/history') + success toast
          - onClose => setShowVerification(false)
          - Koristiti: <VerificationModal /> iz components/shared */}
    </div>
  );
}
