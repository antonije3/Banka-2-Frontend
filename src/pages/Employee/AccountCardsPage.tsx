// TODO [FE2-14b] @Jovan — Employee portal: Pregled kartica po racunu
// TODO [FE2-14b] @Jovan — Employee portal: Upravljanje karticama (block/unblock/deactivate)
//
// Ova stranica je dostupna samo zaposlenima.
// Omogucava pregled i upravljanje karticama za odredjeni racun.
// - Pretraga po broju racuna ili email-u vlasnika
// - cardService.getByAccount(accountNumber) za fetch
// - Akcije: blokiranje, deblokiranje, deaktivacija kartica
// - Kreiranje nove kartice za racun
// - Spec: "Portal kartica" iz Celine 2 (employee section)
// TODO [FE2-14b] @Jovan — Podrzati otvoranje preko rute /employee/accounts/:id/cards (prepopunjen accountId)

export default function AccountCardsPage() {
  // TODO [FE2-14b] @Jovan — Pretraga i fetch
  // useState za accountNumber (input), cards, loading
  // Dugme "Pretrazi" => cardService.getByAccount(accountNumber)

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Portal kartica</h1>

      {/* TODO [FE2-14b] @Jovan — Pretraga racuna
          - Input za broj racuna (18 cifara)
          - Dugme "Pretrazi"
          - Prikaz info o racunu kad se pronadje */}
      <section>
        <p className="text-muted-foreground">Implementirati pretragu racuna...</p>
      </section>

      {/* TODO [FE2-14b] @Jovan — Lista kartica za racun
          - Prikazati nakon uspesne pretrage
          - Card za svaku karticu: broj (maskiran), tip, status, limit, datum isteka
          - Prazan state: "Nema kartica za ovaj racun" */}
      <section>
        <p className="text-muted-foreground">Implementirati listu kartica...</p>
      </section>

      {/* TODO [FE2-14b] @Jovan — Akcije za kartice
          - Dugme "Blokiraj" => cardService.block(id)
          - Dugme "Deblokiraj" => cardService.unblock(id)
          - Dugme "Deaktiviraj" (confirm!) => cardService.deactivate(id)
          - Dugme "Kreiraj novu karticu" => modal sa cardType select
            => cardService.create({ accountNumber, cardType }) */}

      {/* TODO [FE2-14b] @Jovan — Modal za kreiranje kartice
          - Select: tip kartice (VISA/MASTERCARD)
          - useForm<NewCardFormData>({ resolver: zodResolver(newCardSchema) })
          - Submit: cardService.create(data) => refresh listu */}
    </div>
  );
}
