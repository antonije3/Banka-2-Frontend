// TODO [FE2-11a] @Luka — Krediti: Pregled mojih kredita
// TODO [FE2-11b] @Luka — Krediti: Detalji kredita sa ratama
//
// Ova stranica prikazuje kredite ulogovanog korisnika.
// - creditService.getMyLoans() za fetch
// - Lista: tip kredita, iznos, mesecna rata, preostali dug, status
// - Klik na kredit => expand/modal sa detaljima i ratama
// - creditService.getInstallments(loanId) za rate
// - Link na LoanApplicationPage za novi zahtev
// - Spec: "Krediti" iz Celine 2

export default function LoanListPage() {
  // TODO [FE2-11a] @Luka — Fetch kredite
  // useState za loans, loading
  // creditService.getMyLoans()

  // TODO [FE2-11b] @Luka — State za detalje
  // useState za selectedLoan, installments
  // creditService.getInstallments(selectedLoan.id)

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Moji krediti</h1>
        {/* TODO [FE2-11a] @Luka — Dugme "Zahtev za kredit"
            - navigate('/loans/apply') */}
      </div>

      {/* TODO [FE2-11a] @Luka — Lista kredita
          - Card za svaki kredit
          - Prikazati: tip kredita, ukupan iznos, valuta, mesecna rata
          - Preostali dug, datum pocetka/zavrsetka
          - Status badge (ACTIVE=zeleni, PENDING=zuti, CLOSED=sivi)
          - Progress bar za otplaceni procenat
          - onClick => prikazi detalje */}
      <section>
        <p className="text-muted-foreground">Implementirati listu kredita...</p>
      </section>

      {/* TODO [FE2-11b] @Luka — Detalji kredita (modal ili expand)
          - Sve informacije o kreditu
          - Nominalna i efektivna kamatna stopa
          - Tabela rata (installments):
            Kolone: Mesec | Iznos rate | Placeno (da/ne)
          - Progress: X od Y rata placeno */}
    </div>
  );
}
