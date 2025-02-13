"use client"

import NavLink from "@/common/Menu/NavLink"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import MobileMenu from "@/common/Menu/MobileMenu";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

export default function Header() {

    const pathname = usePathname();

    return (
        <header className="bg-background-secondary fixed top-0 left-0 w-full z-50 shadow-md h-[70px] flex items-center">
            <div className="main flex row pt-4 pb-4">
                <div className="hidden 2xl:flex w-5/12 justify-start items-center">
                    <nav className="space-x-1 2xl:space-x-2">
                        <NavLink
                            key={1}
                            href={"/"}
                            active={pathname === "/"}
                        >
                            Domů
                        </NavLink>
                        <NavLink
                            key={2}
                            href={"/klienti"}
                            active={pathname === "/klienti"}
                        >
                            Pro klienty
                        </NavLink>
                        <NavLink
                            key={3}
                            href={"/brigadnici"}
                            active={pathname === "/brigadnici"}
                        >
                            Pro brigádníky
                        </NavLink>
                        <NavLink
                            key={4}
                            href={"/galerie"}
                            active={pathname === "/galerie"}
                        >
                            Galerie
                        </NavLink>
                        <NavLink
                            key={5}
                            href={"/kostymy"}
                            active={pathname === "/kostymy"}
                        >
                            Kostýmy
                        </NavLink>
                        <NavLink
                            key={6}
                            href={"/kontakty"}
                            active={pathname === "/kontakty"}
                        >
                            Kontakty
                        </NavLink>
                    </nav>
                </div>
                <div className="w-5/12 2xl:hidden flex">
                    <MobileMenu pathname={pathname}/>
                </div>
                <div className="w-2/12 flex justify-center items-center">
                    <Link href="/">
                        <Image
                            src="website/lifestore-favicon.svg"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="w-9 h-9 lg:w-10 lg:h-10"
                        />
                    </Link>
                </div>
                <div className="w-5/12 space-x-5 flex items-center justify-end">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}
                                         className="text-xl text-text-secondary transition-transform duration-200 hover:scale-125 hover:text-text-tertiary"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF}
                                         className="text-xl text-text-secondary transition-transform duration-200 hover:scale-125 hover:text-text-tertiary"/>
                    </a>
                </div>
            </div>
        </header>
    );
}