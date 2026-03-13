// TODO [FE2-07a] @Elena — Placanja: Pregled istorije placanja
// TODO [FE2-07b] @Elena — Placanja: Filtriranje i sortiranje transakcija
//
// Ova stranica prikazuje listu svih transakcija/placanja.
// - transactionService.getAll(filters) sa paginacijom
// - Tabela: datum, racun posiljaoca, racun primaoca, iznos, status, svrha
// - Filteri: po racunu, statusu, datumu od-do, iznosu min-max
// - Paginacija (page, limit)
// - Klik na transakciju otvara detalje (modal ili expand row)
// - Dugme "Stampaj potvrdu" => generise PDF sa detaljima transakcije
//   (koristiti jsPDF ili react-pdf biblioteku, treba instalirati: npm install jspdf)
// - URL query params za preselected account (?account=...)

import { useSearchParams } from 'react-router-dom';

export default function PaymentHistoryPage() {
  const [searchParams] = useSearchParams();
  const preselectedAccount = searchParams.get('account') || '';

  // TODO [FE2-07a] @Elena — Fetch transakcije sa paginacijom
  // useState za transactions, loading, pagination, filters
  // transactionService.getAll(filters)

  // TODO [FE2-07b] @Elena — Filter state
  // useForm<TransactionFilterFormData>({ resolver: zodResolver(transactionFilterSchema) })
  // Primena filtera na API poziv

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Pregled plaćanja</h1>

      {/* TODO [FE2-07b] @Elena — Filter sekcija
          - Collapsible/accordion sa filterima
          - Select: racun (iz mojih racuna)
          - Select: status (PENDING/COMPLETED/REJECTED/CANCELLED)
          - DateInput: datum od, datum do
          - Input number: min iznos, max iznos
          - Dugme: Primeni filtere / Resetuj */}
      <section>
        <p className="text-muted-foreground">Implementirati filtere...</p>
      </section>

      {/* TODO [FE2-07a] @Elena — Tabela transakcija
          - Kolone: Datum | Racun posiljaoca | Racun primaoca | Iznos | Valuta | Status | Svrha
          - Badge za status (zeleni=COMPLETED, zuti=PENDING, crveni=REJECTED)
          - Formatiranje iznosa sa valutom
          - Sortiranje po datumu (default: najnovije prvo)
          - Responsive: na mobilnom collapse manje vazne kolone */}
      <section>
        <p className="text-muted-foreground">Implementirati tabelu transakcija...</p>
      </section>

      {/* TODO [FE2-07a] @Elena — Paginacija
          - Prikazati: "Strana X od Y" i dugmad za navigaciju
          - Page size selector (10/25/50)
          - Koristiti PaginatedResponse iz API-ja */}
    </div>
  );
}
