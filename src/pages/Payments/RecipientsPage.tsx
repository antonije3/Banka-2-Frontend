// TODO [FE2-06a] @Elena — Primaoci: Lista sacuvanih primalaca placanja
// TODO [FE2-06b] @Elena — Primaoci: CRUD operacije (dodaj/izmeni/obrisi)
//
// Ova stranica omogucava upravljanje listom sacuvanih primalaca placanja.
// - paymentRecipientService.getAll() za prikaz
// - CRUD: create, update, delete
// - Forma za novog primaoca: ime, broj racuna, adresa (opciono), telefon (opciono)
// - Inline edit ili modal za izmenu
// - Potvrda pre brisanja (confirm dialog)

export default function RecipientsPage() {
  // TODO [FE2-06a] @Elena — Fetch primaoca
  // useState za recipients, loading, error
  // paymentRecipientService.getAll()

  // TODO [FE2-06b] @Elena — CRUD state
  // useState za showCreateForm, editingRecipient, deletingRecipient
  // useForm<CreateRecipientFormData>({ resolver: zodResolver(createRecipientSchema) })

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Primaoci plaćanja</h1>
        {/* TODO [FE2-06b] @Elena — Dugme "Dodaj primaoca"
            - Otvara formu/modal za kreiranje novog primaoca */}
      </div>

      {/* TODO [FE2-06b] @Elena — Forma za novog primaoca (modal ili inline)
          Polja:
          1. Ime primaoca - Input (obavezno)
          2. Broj racuna - Input 18 cifara (obavezno)
          3. Adresa - Input (opciono)
          4. Telefon - Input (opciono)

          Submit: paymentRecipientService.create(data) => refresh listu */}

      {/* TODO [FE2-06a] @Elena — Tabela/lista primalaca
          - Kolone: Ime | Broj racuna | Adresa | Telefon | Akcije
          - Akcije: Edit dugme (otvara edit formu), Delete dugme (confirm pa brise)
          - Prazan state: "Nemate sacuvanih primalaca" sa CTA za dodavanje
          - Pretraga/filter po imenu primaoca */}
      <section>
        <p className="text-muted-foreground">Implementirati listu primalaca...</p>
      </section>

      {/* TODO [FE2-06b] @Elena — Edit modal/forma
          - Isti polja kao create, popunjena postojecim podacima
          - Submit: paymentRecipientService.update(id, data) => refresh */}

      {/* TODO [FE2-06b] @Elena — Delete confirm dialog
          - "Da li ste sigurni da zelite da obrisete primaoca X?"
          - Confirm: paymentRecipientService.delete(id) => refresh */}
    </div>
  );
}
