// TODO [FE2-01a] @Marta — Pocetna strana: Pregled racuna i poslednjih 5 transakcija
// TODO [FE2-01b] @Marta — Pocetna strana: Brzo placanje widget
// TODO [FE2-01c] @Marta — Pocetna strana: Kursna lista widget
//
// Ova stranica je glavna strana nakon logina. Prikazuje:
// 1. Listu korisnikovih racuna sa stanjem (accountService.getMyAccounts)
// 2. Poslednjih 5 transakcija (transactionService.getAll sa limit=5)
// 3. Brzo placanje widget (skracena forma za placanje, otvara NewPaymentPage)
// 4. Kursna lista widget (currencyService.getExchangeRates)

export default function HomePage() {
  // TODO [FE2-01a] @Marta — Fetch racune korisnika i poslednjih 5 transakcija
  // Koristiti: accountService.getMyAccounts(), transactionService.getAll({ limit: 5 })

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Dobrodošli</h1>

      {/* TODO [FE2-01a] @Marta — Sekcija: Moji racuni
          - Kartice sa stanjem za svaki racun
          - Klik na racun vodi na AccountDetailsPage
          - Prikazati: naziv racuna, broj, stanje, valutu, tip */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Moji računi</h2>
        <p className="text-muted-foreground">Implementirati prikaz racuna...</p>
      </section>

      {/* TODO [FE2-01a] @Marta — Sekcija: Poslednje transakcije
          - Tabela sa 5 poslednjih transakcija
          - Kolone: datum, primalac, iznos, status
          - Link "Vidi sve" vodi na PaymentHistoryPage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Poslednje transakcije</h2>
        <p className="text-muted-foreground">Implementirati listu transakcija...</p>
      </section>

      {/* TODO [FE2-01b] @Marta — Sekcija: Brzo placanje
          - Mini forma sa: izaberi racun, primalac (iz liste primaoca), iznos
          - Dugme "Plati" otvara NewPaymentPage sa popunjenim podacima
          - Koristiti paymentRecipientService.getAll() za dropdown primaoca */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Brzo plaćanje</h2>
        <p className="text-muted-foreground">Implementirati brzo placanje widget...</p>
      </section>

      {/* TODO [FE2-01c] @Marta — Sekcija: Kursna lista
          - Tabela sa kursevima iz currencyService.getExchangeRates()
          - Kolone: valuta, kupovni, prodajni, srednji kurs
          - Link "Menjacnica" vodi na ExchangePage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Kursna lista</h2>
        <p className="text-muted-foreground">Implementirati kursnu listu...</p>
      </section>
    </div>
  );
}
