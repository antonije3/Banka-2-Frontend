// TODO [FE2-03a] @Jovan — Racuni: Detalji poslovnog racuna (osnovni prikaz)
// TODO [FE2-03b] @Luka — Racuni: Poslovni racun - dodatne informacije firme
//
// Ova stranica prikazuje detalje poslovnog racuna sa dodatnim info o firmi.
// - useParams() za accountId iz URL-a
// - accountService.getById(id) + accountService.getBusinessDetails(id)
// - Sve sto ima AccountDetailsPage PLUS:
//   - Naziv firme (companyName)
//   - Maticni broj (registrationNumber)
//   - PIB (taxId)
//   - Sifra delatnosti (activityCode)

import { useParams } from 'react-router-dom';

export default function BusinessAccountDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // TODO [FE2-03a] @Jovan — Fetch racun i business detalje
  // accountService.getById(Number(id))
  // accountService.getBusinessDetails(Number(id))
  // transactionService.getAll({ accountNumber: account.accountNumber, limit: 10 })

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* TODO [FE2-03a] @Jovan — Header sa info o racunu (isto kao AccountDetailsPage)
          - Naziv racuna, broj, tip=POSLOVNI badge, status badge */}
      <div>
        <h1 className="text-3xl font-bold">Poslovni račun</h1>
        <p className="text-muted-foreground">ID: {id}</p>
      </div>

      {/* TODO [FE2-03a] @Jovan — Kartica sa stanjem (isto kao AccountDetailsPage) */}
      <section>
        <p className="text-muted-foreground">Implementirati prikaz stanja...</p>
      </section>

      {/* TODO [FE2-03b] @Luka — Sekcija: Informacije o firmi
          - Card sa: Naziv firme, Maticni broj, PIB, Sifra delatnosti
          - Podaci iz BusinessAccount interfejsa (accountService.getBusinessDetails) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Informacije o firmi</h2>
        <p className="text-muted-foreground">Implementirati prikaz podataka firme...</p>
      </section>

      {/* TODO [FE2-03a] @Jovan — Akcije i transakcije (isto kao AccountDetailsPage) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Poslednje transakcije</h2>
        <p className="text-muted-foreground">Implementirati listu transakcija...</p>
      </section>
    </div>
  );
}
