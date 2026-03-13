// TODO [FE2-15a] @Elena — Portal klijenti: Lista i edit
//
// Ova stranica je dostupna samo zaposlenima.
// Prikazuje listu svih klijenata banke sa pretragom.
// - clientService.getAll(filters) sa paginacijom (src/services/clientService.ts)
// - Pretraga po imenu, prezimenu, email-u (ClientFilters)
// - Klik na klijenta => prikaz detalja i njegovih racuna
// - Izmena klijenta: clientService.update(id, data), schema: editClientSchema
//   (sve osim lozinke i JMBG-a se moze menjati)
// - Spec: "Portal klijenata" iz Celine 2 (employee section)
// TODO [FE2-15a] @Elena — Podrzati otvoranje detalja preko rute /employee/clients/:id

export default function ClientsPortalPage() {
  // TODO [FE2-15a] @Elena — Fetch klijente
  // useState za clients, loading, pagination, filters
  // clientService.getAll(filters) sa ClientFilters

  // TODO [FE2-15a] @Elena — State za detalje klijenta
  // useState za selectedClient, clientAccounts

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Portal klijenata</h1>

      {/* TODO [FE2-15a] @Elena — Pretraga i filteri
          - Input: pretraga po imenu/prezimenu/email-u
          - Tabela klijenata:
            Kolone: Ime | Prezime | Email | Telefon | Status | Akcije
          - Paginacija */}
      <section>
        <p className="text-muted-foreground">Implementirati listu klijenata...</p>
      </section>

      {/* TODO [FE2-15a] @Elena — Detalji klijenta (modal ili sidebar)
          - Svi podaci o klijentu
          - Dugme "Izmeni" => modal sa editClientSchema
            => clientService.update(id, data) (sve osim password i JMBG)
          - Lista racuna klijenta (accountService.getAll({ ownerEmail }))
          - Za svaki racun: broj, tip, valuta, stanje, status
          - Linkovi na detalje svakog racuna */}
    </div>
  );
}
