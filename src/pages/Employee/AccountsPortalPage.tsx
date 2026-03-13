// TODO [FE2-14a] @Jovan — Employee portal: Pregled svih racuna (admin/employee)
//
// Ova stranica je dostupna samo zaposlenima.
// Prikazuje sve racune u sistemu sa filterima i pretragom.
// - accountService.getAll(filters) sa paginacijom
// - Filteri: po emailu vlasnika, tipu racuna, statusu
// - Akcije: promena statusa racuna (activate/block/deactivate)
// - Link na detalje racuna
// - Link na CreateAccountPage za novi racun
// - Spec: "Portal racuna" iz Celine 2 (employee section)

export default function AccountsPortalPage() {
  // TODO [FE2-14a] @Jovan — Fetch racune sa paginacijom i filterima
  // useState za accounts, loading, pagination
  // accountService.getAll(filters)

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Portal računa</h1>
        {/* TODO [FE2-14a] @Jovan — Dugme "Kreiraj racun"
            - navigate('/employee/accounts/new') */}
      </div>

      {/* TODO [FE2-14a] @Jovan — Filteri
          - Input: email vlasnika (pretraga)
          - Select: tip racuna (Svi/TEKUCI/DEVIZNI/POSLOVNI)
          - Select: status (Svi/ACTIVE/BLOCKED/INACTIVE) */}
      <section>
        <p className="text-muted-foreground">Implementirati filtere...</p>
      </section>

      {/* TODO [FE2-14a] @Jovan — Tabela racuna
          - Kolone: Vlasnik | Broj racuna | Tip | Valuta | Stanje | Status | Akcije
          - Status badge (ACTIVE=zeleni, BLOCKED=crveni, INACTIVE=sivi)
          - Akcije dropdown:
            - "Blokiraj" (ACTIVE => BLOCKED) => accountService.changeStatus(id, 'BLOCKED')
            - "Aktiviraj" (BLOCKED => ACTIVE) => accountService.changeStatus(id, 'ACTIVE')
            - "Deaktiviraj" (confirm!) => accountService.changeStatus(id, 'INACTIVE')
            - "Detalji" => navigate to account details
          - Paginacija */}
      <section>
        <p className="text-muted-foreground">Implementirati tabelu racuna...</p>
      </section>
    </div>
  );
}
