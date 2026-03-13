// TODO [FE2-03a] @Jovan — Detaljan prikaz racuna - licni
//
// Ova stranica prikazuje detalje jednog racuna (tekuci ili devizni).
// - useParams() za accountId iz URL-a
// - accountService.getById(id) za fetch racuna
// - transactionService.getAll({ accountNumber }) za poslednjih N transakcija
// - Prikaz: naziv, broj, tip, podvrsta (accountSubtype), valuta, stanje, raspolozivo stanje,
//   rezervisana sredstva, dnevni/mesecni limit, dnevna/mesecna potrosnja, status, datum kreiranja
// - Lista poslednjih transakcija za ovaj racun
// - Dugme za promenu naziva racuna (accountService.updateName, schema: accountRenameSchema)
// - Dugme za promenu limita (accountService.changeLimit, schema: accountLimitSchema)
//   => modal sa dnevni limit i mesecni limit, zahteva verifikaciju (VerificationModal)

import { useParams } from 'react-router-dom';

export default function AccountDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // TODO [FE2-03a] @Jovan — Fetch racun i transakcije
  // accountService.getById(Number(id))
  // transactionService.getAll({ accountNumber: account.accountNumber, limit: 10 })

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* TODO [FE2-03a] @Jovan — Header sa info o racunu
          - Naziv racuna (editable inline ili modal)
          - Broj racuna formatiran (XXX-XXXX-XXXXXXXXX-XX)
          - Tip racuna badge
          - Status badge */}
      <div>
        <h1 className="text-3xl font-bold">Detalji računa</h1>
        <p className="text-muted-foreground">ID: {id}</p>
      </div>

      {/* TODO [FE2-03a] @Jovan — Kartica sa stanjem
          - Stanje (balance) velikim fontom
          - Raspolozivo stanje (availableBalance)
          - Rezervisana sredstva (reservedBalance)
          - Valuta
          - Podvrsta racuna (accountSubtype) */}
      <section>
        <p className="text-muted-foreground">Implementirati prikaz stanja...</p>
      </section>

      {/* TODO [FE2-03a] @Jovan — Limiti racuna
          - Dnevni limit / Dnevna potrosnja (dailyLimit / dailySpending)
          - Mesecni limit / Mesecna potrosnja (monthlyLimit / monthlySpending)
          - Progress bar za potrosnju vs limit
          - Dugme "Promeni limit" => modal sa accountLimitSchema
            => accountService.changeLimit(id, { dailyLimit, monthlyLimit })
            => zahteva verifikaciju (VerificationModal) */}
      <section>
        <p className="text-muted-foreground">Implementirati prikaz limita...</p>
      </section>

      {/* TODO [FE2-03a] @Jovan — Akcije
          - Dugme: Novo placanje (navigate to /payments/new?from=accountNumber)
          - Dugme: Prenos (navigate to /transfers?from=accountNumber)
          - Dugme: Promeni naziv (otvara modal, accountRenameSchema, accountService.updateName) */}
      <section>
        <p className="text-muted-foreground">Implementirati akcije...</p>
      </section>

      {/* TODO [FE2-03a] @Jovan — Poslednje transakcije za ovaj racun
          - Tabela: datum, opis, primalac/posiljalac, iznos (+/-), status
          - Link "Vidi sve" => /payments/history?account=accountNumber */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Poslednje transakcije</h2>
        <p className="text-muted-foreground">Implementirati listu transakcija...</p>
      </section>
    </div>
  );
}
