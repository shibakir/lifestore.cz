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
                        <NavLink
                            href={"/galerie"}
                            active={pathname === "/galerie"}
                            className="!text-lg"
                        >
                            Galerie
                        </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={5} asChild>
                        <NavLink
                            href={"/kostymy"}
                            active={pathname === "/kostymy"}
                            className="!text-lg"
                        >
                            Kostýmy
                        </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={6} asChild>
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