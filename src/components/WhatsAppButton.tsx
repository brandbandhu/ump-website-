import { COMPANY } from "@/lib/site-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
    "Hi UMP Consultants, I would like to know more about your services.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full grid place-items-center shadow-2xl text-white animate-float"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.03 5.33C9.96 5.33 5 10.29 5 16.36c0 2.07.59 4 1.62 5.67L5.06 27l5.13-1.55a11.06 11.06 0 0 0 5.84 1.67h.01c6.07 0 11.03-4.96 11.03-11.03 0-2.95-1.15-5.71-3.23-7.79a10.96 10.96 0 0 0-7.81-3.24zm0 20.18h-.01a9.18 9.18 0 0 1-4.68-1.28l-.34-.2-3.04.92.91-2.97-.22-.35a9.16 9.16 0 0 1-1.41-4.88c0-5.06 4.12-9.18 9.19-9.18a9.13 9.13 0 0 1 6.49 2.69 9.13 9.13 0 0 1 2.69 6.49c0 5.07-4.12 9.19-9.18 9.19z" />
      </svg>
    </a>
  );
}
