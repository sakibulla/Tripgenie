import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/theme-provider";
import SessionProvider from "@/components/providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Providers>
            <Navbar />

            <main>{children}</main>

            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}