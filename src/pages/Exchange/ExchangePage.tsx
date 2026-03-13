// TODO [FE2-09a] @Antonije — Menjacnica: Kursna lista
// TODO [FE2-09b] @Antonije — Menjacnica: Kalkulator konverzije
//
// Ova stranica prikazuje kursnu listu i omogucava konverziju valuta.
// - currencyService.getExchangeRates() za kursnu listu
// - currencyService.convert() za konverziju
// - Tabela kurseva: valuta, kupovni, prodajni, srednji kurs
// - Forma za konverziju: iz valute, u valutu, iznos => prikaz rezultata
// - Spec: "Menjacnica" iz Celine 2
// - Bazna valuta: RSD

export default function ExchangePage() {
  // TODO [FE2-09a] @Antonije — Fetch kursne liste
  // useState za exchangeRates, loading
  // currencyService.getExchangeRates()

  // TODO [FE2-09b] @Antonije — Forma za konverziju
  // useForm<ExchangeFormData>({ resolver: zodResolver(exchangeSchema) })
  // useState za conversionResult

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Menjačnica</h1>

      {/* TODO [FE2-09a] @Antonije — Kursna lista tabela
          - Tabela sa kolonama: Valuta | Kupovni kurs | Prodajni kurs | Srednji kurs
          - Valute: EUR, CHF, USD, GBP, JPY, CAD, AUD
          - Bazna valuta = RSD
          - Formatiranje brojeva na 4 decimale
          - Datum kursa */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Kursna lista</h2>
        <p className="text-muted-foreground">Implementirati kursnu listu...</p>
      </section>

      {/* TODO [FE2-09b] @Antonije — Forma za konverziju
          Polja:
          1. Iz valute - Select dropdown
          2. U valutu - Select dropdown (razlicita od prve)
          3. Iznos - Input number
          4. Racun - Select (moji racuni u odgovarajucoj valuti)

          Prikaz rezultata:
          - "X EUR = Y RSD po kursu Z"
          - Dugme "Konvertuj" => currencyService.convert(data) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Konverzija</h2>
        <p className="text-muted-foreground">Implementirati konverziju...</p>
      </section>
    </div>
  );
}
