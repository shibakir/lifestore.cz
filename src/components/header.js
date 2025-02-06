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
        <header className="bg-background-secondary">
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
                        <DropdownMenu key={4} asChild>
                            <DropdownMenuTrigger>
                                <NavLink
                                    key={50}
                                    href={""}
                                    active={pathname.startsWith("/galerie")}
                                >
                                    Galerie
                                </NavLink>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={5}
                                align="start"
                                onCloseAutoFocus={(e) => e.preventDefault()}
                                className="shadow-none flex flex-col space-y-2"
                            >
                                <DropdownMenuItem className="focus:bg-transparent cursor-pointer" asChild>
                                    <NavLink
                                        key={51}
                                        href="/galerie#tym"
                                        active={pathname === "/galerie#tym"}
                                        className="!text-lg"
                                    >
                                        Náš tým v akci
                                    </NavLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="focus:bg-transparent cursor-pointer" asChild>
                                    <NavLink
                                        key={52}
                                        href="/galerie#kostymy"
                                        active={pathname === "/galerie#kostymy"}
                                        className="!text-lg"
                                    >
                                        Naše kostýmy
                                    </NavLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <NavLink
                            key={5}
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
                        <Image src="/logo.svg" alt="Logo" width={48} height={48}/>
                    </Link>
                </div>
                <div className="w-5/12 space-x-5 flex items-center justify-end">
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