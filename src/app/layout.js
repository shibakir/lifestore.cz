import "@fontsource/montserrat";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="cz">
      <body>
        {children}
      </body>
    </html>
  );
}
