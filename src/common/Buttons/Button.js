import { Button as ShadCNButton } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const variants = {
    light: {
        primaryColor: "bg-button-button-4",
        secondaryColor: "hover:bg-button-button-5",
        primaryTextColor: "text-text-secondary",
        secondaryTextColor: "text-text-primary",
    },
    dark: {
        primaryColor: "bg-button-button-1",
        secondaryColor: "hover:bg-button-button-1",
        primaryTextColor: "text-text-primary",
        secondaryTextColor: "text-text-primary",
    },
    "light-green": {
        primaryColor: "bg-button-button-2",
        secondaryColor: "hover:bg-button-button-2",
        primaryTextColor: "text-text-secondary",
        secondaryTextColor: "text-text-secondary",
    },
    "mild-green": {
        primaryColor: "bg-button-button-3",
        secondaryColor: "hover:bg-button-button-3",
        primaryTextColor: "text-text-primary",
        secondaryTextColor: "text-text-primary",
    }
};

export default function Button({ text, link, className, icon, type="", variant }) {

    const { primaryColor, secondaryColor, primaryTextColor, secondaryTextColor } = variants[variant] || variants.dark;

    return (
        <ShadCNButton
            type={type}
            className={clsx(
                `${primaryColor} ${secondaryColor} group transition transform duration-200 ease-in-out origin-top-left hover:scale-[1.07]`,
                className
            )}
        >
            {icon && <FontAwesomeIcon icon={icon} className={`${variant === "light" ? "text-text-secondary" : ""} text-xl`}/>}
            <Link href={link} className={`${primaryTextColor} hover:${secondaryTextColor} inline-flex w-full h-full justify-center items-center`}>
                {text}
            </Link>
        </ShadCNButton>
    );
}
