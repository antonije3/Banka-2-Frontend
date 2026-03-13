// TODO [FE2-10a] @Marta — Kartice: Lista kartica korisnika
// TODO [FE2-10b] @Marta — Kartice: Akcije (blokiranje, deblokiranje, deaktivacija, limit)
//
// Ova stranica prikazuje sve kartice ulogovanog korisnika.
// - cardService.getMyCards() za fetch
// - Kartice prikazati vizuelno (card-like UI sa brojem, tipom, statusom)
// - Akcije: blokiraj, deblokiraj, deaktiviraj, promeni limit
// - Maskiran broj kartice (**** **** **** 1234)
// - Zahtev za novu karticu: cardService.create({ accountNumber, cardType })
//   => email verifikacija (cardService.requestCardVerification)
// - Tipovi kartica: VISA, MASTERCARD, DINACARD, AMERICAN_EXPRESS
// - Za poslovni racun: kartica se pravi za ovlasceno lice (AuthorizedPerson)
//   => cardService.getAuthorizedPersons(accountNumber) za dropdown
// - Max kartice: 2 po licnom racunu, 1 po ovlascenom licu za poslovni
// - Spec: "Kartice" iz Celine 2
// - Luhn validacija za prikaz (16 cifara)

export default function CardListPage() {
  // TODO [FE2-10a] @Marta — Fetch kartice
  // useState za cards, loading
  // cardService.getMyCards()

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Moje kartice</h1>

      {/* TODO [FE2-10a] @Marta — Prikaz kartica
          - Card komponenta za svaku karticu (vizuelno lici na bankovnu karticu)
          - Prikazati: maskiran broj (****1234), tip (VISA/MASTERCARD/DINACARD/AMEX), ime drzaoca
          - Datum isteka, status badge, povezani racun
          - Razlicit dizajn za VISA vs MASTERCARD */}
      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-muted-foreground col-span-full">Implementirati prikaz kartica...</p>
      </div>

      {/* TODO [FE2-10b] @Marta — Akcije za svaku karticu
          - Dugme "Blokiraj" (status=ACTIVE) => cardService.block(id)
          - Dugme "Deblokiraj" (status=BLOCKED) => cardService.unblock(id)
          - Dugme "Deaktiviraj" (confirm!) => cardService.deactivate(id)
          - Dugme "Promeni limit" => otvara modal sa Input za novi limit
            => cardService.changeLimit(id, newLimit)
          - DEACTIVATED kartice: sive, bez akcija
          - Svaka akcija refreshuje listu */}
    </div>
  );
}
