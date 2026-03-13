// TODO [FE2-19a] @Luka — Komponenta: Modal za verifikaciju transakcije (OTP)
//
// Reusable modal komponenta za verifikaciju placanja i prenosa.
// - Prikazuje input za OTP kod (4-6 cifara)
// - react-hook-form + zodResolver(verificationSchema)
// - Na submit: transactionService.verifyPayment({ transactionId, code })
// - Props: transactionId, isOpen, onClose, onSuccess
// - Timer: kod vazi 5 minuta (spec zahtev)
// - Limit: max 3 neuspesna pokusaja, nakon toga transakcija se otkazuje
// - Error handling za nevalidan/istekao kod
// - Spec: "Verifikacija transakcije" iz Celine 2
// TODO [FE2-19a] @Luka — Integracija sa mobilnim flow-om potvrde transakcije (status approve/reject)

interface VerificationModalProps {
  transactionId: number | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function VerificationModal({
  transactionId,
  isOpen,
  onClose,
  onSuccess,
}: VerificationModalProps) {
  // TODO [FE2-19a] @Luka — Setup forme i stanja
  // useForm<VerificationFormData>({ resolver: zodResolver(verificationSchema) })
  // useState za loading, error, countdown, attemptsLeft
  // useEffect za countdown timer (5 min)
  // Kada attemptsLeft padne na 0 -> auto-cancel pending transakcije + close modal

  if (!isOpen || !transactionId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Verifikacija transakcije</h2>

        {/* TODO [FE2-19a] @Luka — OTP forma
            - Tekst: "Unesite verifikacioni kod koji ste dobili"
            - Input za kod (4-6 cifara, centered, large font)
            - Error poruka ispod inputa
            - Dugme "Potvrdi" => submit
            - Link "Posalji ponovo" (disabled dok countdown traje)
              - Prikazati: "Posaljite ponovo za Xs"
            - Prikazati preostale pokusaje: "Preostalo pokusaja: 3/2/1"
            - Po 3 neuspesna pokusaja prikazati poruku o automatskom otkazivanju

            Submit handler:
            - transactionService.verifyPayment({ transactionId, code })
            - Na uspeh: onSuccess()
            - Na gresku: prikazati error (nevalidan kod, istekao, itd) */}
        <p className="text-muted-foreground">Implementirati verifikacionu formu...</p>

        {/* TODO [FE2-19a] @Luka — Footer dugmad
            - "Otkazi" => onClose()
            - "Potvrdi" => submit forme */}
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2">Otkaži</button>
        </div>
      </div>
    </div>
  );
}
