// TODO [FE2-08b] @Antonije — Transferi: Istorija transfera
//
// Ova stranica prikazuje hronolosku listu svih transfera korisnika.
// - transactionService.getTransfers(filters) sa paginacijom
// - Tabela: datum, sa racuna, na racun, iznos, valuta (from/to), kurs, provizija, status
// - Filteri: po datumu od-do, racunu
// - Paginacija
// - Spec: "Istorija transfera" iz Celine 2

export default function TransferHistoryPage() {
  // TODO [FE2-08b] @Antonije — Fetch transfere sa paginacijom
  // useState za transfers, loading, pagination, filters
  // transactionService.getTransfers(filters)

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Istorija transfera</h1>

      {/* TODO [FE2-08b] @Antonije — Filteri
          - Select: racun (iz mojih racuna)
          - DateInput: datum od, datum do */}
      <section>
        <p className="text-muted-foreground">Implementirati filtere...</p>
      </section>

      {/* TODO [FE2-08b] @Antonije — Tabela transfera
          - Kolone: Datum | Sa racuna | Na racun | Iznos | Iz valute | U valutu | Kurs | Provizija | Status
          - Badge za status
          - Sortiranje po datumu (najnovije prvo)
          - Paginacija */}
      <section>
        <p className="text-muted-foreground">Implementirati tabelu transfera...</p>
      </section>
    </div>
  );
}
