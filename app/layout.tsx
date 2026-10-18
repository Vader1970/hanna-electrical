import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SiteProvider } from "@/components/site-provider";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanna Electrical — Christchurch Electricians",
  description:
    "From new builds and renovations to lighting and everyday electrical work. Quality workmanship backed by over 30 years of industry experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className={`${archivo.className} bg-white text-ink antialiased`}>
        <svg width="0" height="0" aria-hidden="true" className="absolute">
          <filter id="heRev" colorInterpolationFilters="linearRGB">
            <feColorMatrix
              type="matrix"
              values="-0.333 0 0 0 1  -1.35 1.35 0 0 1  -1.35 0 1.35 0 1  0 0 0 1 0"
            />
          </filter>
        </svg>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
