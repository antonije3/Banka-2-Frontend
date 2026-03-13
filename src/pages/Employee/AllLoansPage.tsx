// TODO [FE2-16b] @Luka — Portal krediti: Spisak svih kredita
//
// Ova stranica je dostupna samo zaposlenima.
// Prikazuje sve kredite u bankarskom sistemu sa filterima.
// - creditService.getAll(filters) sa paginacijom
// - Filteri: po tipu kredita, statusu
// - Tabela: klijent, tip, iznos, mesecna rata, preostali dug, status
// - Klik za detalje (rate, kamatna stopa, itd.)
// - Spec: "Svi krediti" iz Celine 2 (employee section)

export default function AllLoansPage() {
  // TODO [FE2-16b] @Luka — Fetch sve kredite
  // useState za loans, loading, pagination, filters
  // creditService.getAll(filters)

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Svi krediti</h1>

      {/* TODO [FE2-16b] @Luka — Filteri
          - Select: tip kredita (Svi/GOTOVINSKI/STAMBENI/AUTO/STUDENTSKI/REFINANSIRAJUCI)
          - Select: status (Svi/ACTIVE/PENDING/APPROVED/REJECTED/CLOSED)
          - Paginacija */}
      <section>
        <p className="text-muted-foreground">Implementirati filtere...</p>
      </section>

      {/* TODO [FE2-16b] @Luka — Tabela kredita
          - Kolone: Klijent | Tip | Iznos | Valuta | Mesecna rata | Preostali dug | Status
          - Status badge
          - Expand/modal za detalje: kamatne stope, rate, datumi
          - Paginacija */}
      <section>
        <p className="text-muted-foreground">Implementirati tabelu kredita...</p>
      </section>
    </div>
  );
}
