"use client"

import NavLink from "@/common/Link"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Header() {

    const pathname = usePathname();

    return (
        <header className="bg-background-secondary">
            <div className="w-10/12 mx-auto flex row p-4">
                <div className="w-1/3 flex justify-start items-center">
                    <nav className="space-x-5">
                        <NavLink href="/" active={pathname === "/"}>Domů</NavLink>
                        <NavLink href="/klienti" active={pathname === "/klienti"}>Pro klienty</NavLink>
                        <NavLink href="/brigadnici" active={pathname === "/brigadnici"}>Pro brigádníky</NavLink>
                        <NavLink href="/kontakty" active={pathname === "/kontakty"}>Kontakty</NavLink>
                    </nav>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                    <Link href="/">
                        <Image src="/globe.svg" alt="Logo" width={48} height={48}/>
                    </Link>
                </div>
                <div className="w-1/3 space-x-5 flex items-center justify-end">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="text-xl"/>
                    </a>
                </div>
            </div>
        </header>
    );
}