// TODO [FE2-13a] @Luka — Kreiranje racuna - tekuci
// TODO [FE2-13b] @Luka — Kreiranje racuna - devizni
// TODO [FE2-13c] @Luka — Kreiranje racuna - poslovni flow (firma)
//
// Ova stranica je dostupna samo zaposlenima (employee/admin).
// Omogucava kreiranje novog bankovnog racuna za klijenta.
// - react-hook-form + zodResolver(createAccountSchema)
// - Polja: email vlasnika (ili pretraga postojeceg klijenta sa clientService.search),
//   tip racuna, podvrsta racuna (AccountSubtype), valuta, inicijalni depozit, checkbox "Napravi karticu"
// - Za TEKUCI/DEVIZNI podvrste: Standardni/Stedni/Penzionerski/Za mlade/Studentski/Za nezaposlene
// - Za POSLOVNI podvrste: DOO/AD/Fondacija + polja firme (naziv, maticni, PIB, sifra delatnosti, adresa, grad, drzava)
// - Valuta: za TEKUCI samo RSD; za DEVIZNI dropdown (EUR/CHF/USD/GBP/JPY/CAD/AUD)
// - accountService.create(data)
// - Spec: "Kreiranje racuna" iz Celine 2 (employee section)

export default function CreateAccountPage() {
  // TODO [FE2-13a] @Luka — Setup forme
  // TODO [FE2-13b] @Luka — Setup forme
  // TODO [FE2-13c] @Luka — Setup forme
  // useForm<CreateAccountFormData>({ resolver: zodResolver(createAccountSchema) })
  // watch('accountType') za condicionalno prikazivanje poslovnih polja i podvrsta
  // clientService.search(query) za autocomplete vlasnika

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Kreiranje računa</h1>

      {/* TODO [FE2-13a] @Luka — Forma za kreiranje tekuceg racuna
          Polja:
          1. Email vlasnika - Input sa autocomplete (clientService.search za predloge)
          2. Tip racuna - Select (TEKUCI, DEVIZNI, POSLOVNI)
          3. Podvrsta racuna - Select (zavisi od tipa):
             - TEKUCI: Standardni, Stedni, Penzionerski, Za mlade, Studentski, Za nezaposlene
             - DEVIZNI: Standardni, Stedni, Penzionerski, Za mlade, Studentski, Za nezaposlene
             - POSLOVNI: DOO, AD, Fondacija
          4. Valuta - Select:
             - TEKUCI => samo RSD (disabled)
             - DEVIZNI => EUR, CHF, USD, GBP, JPY, CAD, AUD
             - POSLOVNI => RSD + devizne valute
          5. Inicijalni depozit - Input number (opciono)
          6. Napravi karticu - Checkbox (createCard boolean)

          FE2-13c (poslovni flow): podaci firme
          Condicionalna polja (prikazati samo kad je tip = POSLOVNI):
          7. Naziv firme - Input
          8. Maticni broj - Input
          9. PIB - Input
          10. Sifra delatnosti - Input (format xx.xx, sa validacijom)
          11. Adresa firme - Input
          12. Grad - Input
          13. Drzava - Input

          FE2-13b (devizni flow): dozvoljene valute EUR/CHF/USD/GBP/JPY/CAD/AUD
          Submit: accountService.create(data)
          Na uspeh: toast "Racun uspesno kreiran" + navigate('/employee/accounts') */}
      <form className="space-y-6">
        <p className="text-muted-foreground">Implementirati formu za kreiranje racuna...</p>
      </form>
    </div>
  );
}
