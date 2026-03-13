// TODO [FE2-12a] @Luka — Krediti: Forma za zahtev
//
// Ova stranica sadrzi formu za podnoscenje zahteva za kredit.
// - react-hook-form + zodResolver(loanApplicationSchema)
// - Polja: tip kredita, tip kamate (fiksni/varijabilni), iznos, valuta, svrha kredita,
//   period otplate (dropdown sa dozvoljenim vrednostima iz REPAYMENT_PERIODS), racun, telefon
// - Opciona polja: status zaposlenja, mesecni prihod, stalni radni odnos, period zaposlenja
// - Prikaz kalkulacije: mesecna rata, ukupan iznos, efektivna kamatna stopa
// - Submit: creditService.apply(data)
// - Spec: "Zahtev za kredit" iz Celine 2

export default function LoanApplicationPage() {
  // TODO [FE2-12a] @Luka — Setup forme
  // useForm<LoanApplicationFormData>({ resolver: zodResolver(loanApplicationSchema) })
  // accountService.getMyAccounts() za dropdown racuna

  // TODO [FE2-12a] @Luka — Kalkulacija (live preview)
  // watch('amount'), watch('repaymentPeriod') => izracunati mesecnu ratu
  // Formula: amount * (rate * (1+rate)^n) / ((1+rate)^n - 1) gde je n=period, rate=godisnja/12

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Zahtev za kredit</h1>

      {/* TODO [FE2-12a] @Luka — Forma za kredit
          Polja:
          1. Tip kredita - Select (GOTOVINSKI, STAMBENI, AUTO, STUDENTSKI, REFINANSIRAJUCI)
          2. Tip kamate - Select (FIKSNI, VARIJABILNI) - InterestRateType
          3. Iznos - Input number
          4. Valuta - Select (RSD, EUR, CHF, USD)
          5. Svrha kredita - Textarea (loanPurpose, obavezno)
          6. Period otplate - Select DROPDOWN (ne slobodan unos!)
             => Koristiti REPAYMENT_PERIODS[loanType] za opcije
             => GOTOVINSKI/AUTO/REFINANSIRAJUCI: 12,24,36,48,60,72,84
             => STAMBENI: 60,120,180,240,300,360
             => STUDENTSKI: 12,24,36,48,60
             => Dinamicki menjati opcije kad se promeni tip kredita (watch('loanType'))
          7. Racun za isplatu - Select (moji racuni)
          8. Kontakt telefon - Input

          Opciona polja (accordion/collapsible):
          9. Status zaposlenja - Input
          10. Mesecni prihod - Input number
          11. Stalni radni odnos - Checkbox/Switch
          12. Period zaposlenja (meseci) - Input number

          Submit: creditService.apply(data) => success toast + navigate('/loans') */}
      <form className="space-y-6">
        <p className="text-muted-foreground">Implementirati formu za kredit...</p>
      </form>

      {/* TODO [FE2-12a] @Luka — Preview kalkulacije (sidebar card)
          - Mesecna rata: X RSD
          - Ukupan iznos za vracanje: Y RSD
          - Kamatna stopa: Z%
          - Azurira se live dok korisnik menja iznos i period */}
    </div>
  );
}
