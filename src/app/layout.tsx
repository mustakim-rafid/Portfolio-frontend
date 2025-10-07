import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "MAC | Full Stack Web Engineer",
  description: "Mustakim Ali Chowdhury | Full Stack Web Engineer",
  icons: '/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="top-center" />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
