
import type { Metadata } from "next";
import { Playfair_Display, Source_Code_Pro } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/NavigationBar";
import Container from "@/components/container";
import Footer from "@/components/Footer";
import { UserProvider } from "@/components/UserContext"; // Set path accordingly

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: "Samsung",
  description: "S Series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sourceCodePro.variable} antialiased`}
      >
        <UserProvider>
          <Container>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen flex-col">
                <NavigationBar />
                {children}
                <Footer />
              </div>
            </ThemeProvider>
          </Container>
        </UserProvider>
      </body>
    </html>
  );
}