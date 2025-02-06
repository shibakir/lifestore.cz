"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLink from "@/common/Menu/NavLink"
import { HiMenu } from "react-icons/hi";
import {useState} from "react";

export default function MobileMenu({pathname}) {

    const [open, setOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setSubMenuOpen(false);
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <button onClick={() => setOpen(!open)}>
                    <HiMenu className="text-black" size={30}/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-screen block 2xl:hidden border-none shadow-none bg-background-secondary"
                align="end"
                onCloseAutoFocus={(e) => e.preventDefault()}
            >
                <DropdownMenuGroup className="p-5 pt-7 pb-7 space-y-3 bg-background-secondary flex flex-col items-center">
                    <DropdownMenuItem key={1} asChild>
                        <NavLink
                            href={"/"}
                            active={pathname === "/"}
                            className="!text-lg"
                        >
                            Domů
                        </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={2} asChild>
                        <NavLink
                            href={"/klienti"}
                            active={pathname === "/klienti"}
                            className="!text-lg"
                        >
                            Pro klienty
                        </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={3} asChild>
                        <NavLink
                            href={"/brigadnici"}
                            active={pathname === "/brigadnici"}
                            className="!text-lg"
                        >
                            Pro brigádníky
                        </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={4} asChild>
                        <DropdownMenu open={subMenuOpen} onOpenChange={setSubMenuOpen}>
                            <DropdownMenuTrigger
                                className={
                                    "inline-flex items-center px-1 pt-1 border-b-2 text-lg leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-background-tertiary hover:border-background-tertiary focus:text-background-tertiary focus:border-background-tertiary"
                                }
                            >
                                Galerie
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={5}
                                align="center"
                                onCloseAutoFocus={(e) => e.preventDefault()}
                                className="shadow-none flex flex-col min-w-[200px] space-y-2"
                            >
                                <DropdownMenuItem className="focus:bg-transparent flex justify-center text-center" asChild>
                                    <NavLink
                                        key={51}
                                        href="/galerie#tym"
                                        active={pathname === "/galerie#tym"}
                                        className="!text-lg"
                                        onClick={handleClose}
                                    >
                                        Náš tým v akci
                                    </NavLink>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="focus:bg-transparent flex justify-center text-center" asChild>
                                    <NavLink
                                        key={52}
                                        href="/galerie#kostymy"
                                        active={pathname === "/galerie#kostymy"}
                                        className="!text-lg"
                                        onClick={handleClose}
                                    >
                                        Naše kostýmy
                                    </NavLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={5} asChild>
                        <NavLink
                            href={"/kontakty"}
                            active={pathname === "/kontakty"}
                            className="!text-lg"
                        >
                            Kontakty
                        </NavLink>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}