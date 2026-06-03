import { createWhatsappUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  phone: string;
  businessName: string;
  label?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-[#15803d] text-white shadow-[0_12px_28px_rgba(21,128,61,0.22)] hover:bg-[#166534]",
  secondary:
    "border border-[#171717]/15 bg-white text-[#171717] hover:border-[#171717]/35",
  dark: "bg-[#171717] text-white hover:bg-[#2d2d2d]",
};

export function WhatsAppButton({
  phone,
  businessName,
  label = "Reservar por WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsappUrl({ phone, businessName })}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center px-5 text-sm font-bold transition ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
