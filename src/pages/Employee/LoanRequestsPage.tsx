// TODO [FE2-16a] @Luka — Portal krediti: Zahtevi (odobri/odbij)
//
// Ova stranica je dostupna samo zaposlenima.
// Prikazuje sve zahteve za kredit sa statusom PENDING.
// - creditService.getRequests({ status: 'PENDING' }) za fetch (vraca LoanRequest[])
// - Tabela sa zahtevima: klijent, tip kredita, tip kamate, iznos, svrha, period, datum
// - Akcije: odobri (approve) ili odbij (reject sa razlogom)
// - Filter: po statusu (Pending/Approved/Rejected/All)
// - Spec: "Zahtevi za kredit" iz Celine 2 (employee section)

export default function LoanRequestsPage() {
  // TODO [FE2-16a] @Luka — Fetch zahteve
  // useState za loanRequests, loading, statusFilter
  // creditService.getRequests({ status: statusFilter }) - koristi LoanRequest tip

  // TODO [FE2-16a] @Luka — State za odobravanje/odbijanje
  // useState za selectedLoan, showRejectModal, rejectReason

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Zahtevi za kredit</h1>

      {/* TODO [FE2-16a] @Luka — Filter po statusu
          - Tabs: Svi | Na cekanju | Odobreni | Odbijeni
          - Badge sa brojem zahteva po statusu */}
      <section>
        <p className="text-muted-foreground">Implementirati filtere...</p>
      </section>

      {/* TODO [FE2-16a] @Luka — Tabela zahteva
          - Kolone: Klijent | Tip kredita | Tip kamate | Iznos | Svrha | Valuta | Period | Datum | Status | Akcije
          - Status badge (PENDING=zuti, APPROVED=zeleni, REJECTED=crveni)
          - Expand row za detalje zahteva (zaposlenje, prihod, itd) */}
      <section>
        <p className="text-muted-foreground">Implementirati tabelu zahteva...</p>
      </section>

      {/* TODO [FE2-16a] @Luka — Akcije odobravanje/odbijanje
          - Dugme "Odobri" => creditService.approve(loanId) + refresh
          - Dugme "Odbij" => otvara modal za unos razloga
          - Modal: textarea za razlog odbijanja
            Submit: creditService.reject(loanId, reason) + refresh
          - Samo za PENDING zahteve */}
    </div>
  );
}
