// TODO [FE2-18c] @Antonije — Komponenta: Sidebar navigacija za klijente
//
// Sidebar koji se prikazuje na levoj strani za ulogovane klijente.
// Sadrzi linkove ka svim klijentskim stranicama.
// - Prikazuje se unutar MainLayout-a
// - Aktivna stranica je highlight-ovana
// - Responsive: na mobilnom se sklapa u hamburger menu
// - Koristiti react-router-dom NavLink za active state

import { NavLink } from 'react-router-dom';

export default function ClientSidebar() {
  // TODO [FE2-18c] @Antonije — Navigacioni linkovi
  // Definisati niz linkova:
  // - Pocetna (/home)
  // - Racuni (/accounts)
  // - Placanja (/payments/new)
  // - Primaoci (/payments/recipients)
  // - Prenosi (/transfers)
  // - Istorija (/payments/history)
  // - Menjacnica (/exchange)
  // - Kartice (/cards)
  // - Krediti (/loans)
  // Za employee/admin dodati:
  // - Portal racuna (/employee/accounts)
  // - Portal kartica (/employee/cards)
  // - Portal klijenata (/employee/clients)
  // - Zahtevi za kredit (/employee/loan-requests)
  // - Svi krediti (/employee/loans)
  // Koristiti useAuth() za proveru role (admin/employee vs klijent)

  return (
    <aside className="w-64 border-r bg-muted/40 min-h-screen p-4">
      <nav className="space-y-2">
        {/* TODO [FE2-18c] @Antonije — Klijentski linkovi
            - NavLink za svaku stavku
            - className sa active state: bg-primary/10 kad je aktivna
            - Ikone ispred teksta (lucide-react)
            - Grupiranje: "Moje finansije", "Employee portal" (ako je admin) */}
        <p className="text-muted-foreground text-sm">Implementirati sidebar navigaciju...</p>
      </nav>
    </aside>
  );
}
