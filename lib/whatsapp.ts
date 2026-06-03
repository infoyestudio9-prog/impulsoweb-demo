const NON_DIGITS = /\D/g;

export function normalizeWhatsapp(phone: string) {
  const digits = phone.replace(NON_DIGITS, "");

  if (digits.startsWith("598")) {
    return digits;
  }

  return `598${digits.replace(/^0+/, "")}`;
}

type CreateWhatsappUrlArgs = {
  phone: string;
  businessName: string;
};

export function createWhatsappUrl({
  phone,
  businessName,
}: CreateWhatsappUrlArgs) {
  const normalizedPhone = normalizeWhatsapp(phone);
  const message = `Hola, quiero consultar disponibilidad para reservar un horario en ${businessName}.`;

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
