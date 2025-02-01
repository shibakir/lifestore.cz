"use client"

import "./globals.css";
import { Montserrat } from 'next/font/google';
import {usePathname} from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export default function RootLayout({ children }) {

    const pathname = usePathname();

    return (
        <html lang="cs">
        <body className={`layout ${montserrat.className}`}>
        <Header/>
        <main className="content">
            {children}
        </main>
        {pathname.startsWith("/special") ? <Footer/> : <Footer/>}
        </body>
        </html>
    );
}
