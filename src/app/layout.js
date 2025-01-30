import "@fontsource/montserrat";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="cz">
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
  );
}
