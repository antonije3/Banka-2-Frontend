// TODO [FE2-02a] @Jovan — Racuni: Lista svih racuna korisnika
// TODO [FE2-02b] @Jovan — Racuni: Lista transakcija za selektovani racun
//
// Ova stranica prikazuje sve racune ulogovanog korisnika.
// - accountService.getMyAccounts() za fetch
// - Kartice/tabela sa: naziv, broj racuna, tip (tekuci/devizni/poslovni), valuta, stanje, status
// - Klik na racun vodi na AccountDetailsPage (ili BusinessAccountDetailsPage za poslovni)
// - Filtriranje po tipu racuna (tabs ili dropdown)
// - Badge za status racuna (active/blocked/inactive)

import { useNavigate } from 'react-router-dom';

export default function AccountListPage() {
  const navigate = useNavigate();

  // TODO [FE2-02a] @Jovan — Fetch racune: accountService.getMyAccounts()
  // useState za accounts, loading, error
  // useEffect za inicijalni fetch

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Moji računi</h1>
      </div>

      {/* TODO [FE2-02a] @Jovan — Filter po tipu racuna
          - Tabs ili Select: Svi / Tekuci / Devizni / Poslovni
          - Filtrirati accounts listu po accountType */}

      {/* TODO [FE2-02a] @Jovan — Prikaz racuna kao kartice
          - Card komponenta za svaki racun
          - Prikazati: ime racuna, broj racuna (formatiran), tip, valuta, stanje
          - Badge za status (zeleni=ACTIVE, crveni=BLOCKED, sivi=INACTIVE)
          - onClick => navigate(`/accounts/${account.id}`)
          - Za POSLOVNI tip => navigate(`/accounts/${account.id}/business`) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <p className="text-muted-foreground col-span-full">Implementirati prikaz racuna...</p>
      </div>

      {/* TODO [FE2-02b] @Jovan — Lista transakcija za selektovani racun
          - Po defaultu selektovati prvi racun iz liste
          - Prikazati transakcije za selektovani racun (datum, tip, iznos, status)
          - Sortiranje po datumu i tipu transakcije
          - Paginacija za listu transakcija */}
    </div>
  );
}
