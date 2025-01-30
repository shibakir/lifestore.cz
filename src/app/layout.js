"use client"

import "@fontsource/montserrat";
import "./globals.css";
import {usePathname} from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {

    const pathname = usePathname();

    return (
        <html lang="cz">
            <body className="layout">
                <Header />
                <main className="content">
                    {children}
                </main>
                {pathname.startsWith("/special") ? <Footer /> : <Footer />}
            </body>
        </html>
  );
}
