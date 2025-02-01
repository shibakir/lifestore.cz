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

const menuItems = [
    { name: "Domů", href: "/" },
    { name: "Pro klienty", href: "/klienti" },
    { name: "Pro brigádníky", href: "/brigadnici" },
    { name: "Kontakty", href: "/kontakty" },
];

export default function MobileMenu({pathname}) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="p-2">
                    <HiMenu className="text-black" size={30}/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-screen block 2xl:hidden border-none shadow-none bg-background-secondary"
                align="end"
                onCloseAutoFocus={(e) => e.preventDefault()}
            >
                <DropdownMenuGroup className="p-5 pt-7 pb-7 space-y-3 bg-background-secondary flex flex-col items-center">
                    {menuItems.map((item) => {
                        return (
                            <DropdownMenuItem key={item.href}>
                                <NavLink
                                    href={item.href}
                                    active={pathname === item.href}
                                >
                                    {item.name}
                                </NavLink>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}