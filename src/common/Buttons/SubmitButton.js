import { Button as ShadCNButton } from '@/components/ui/button';
import clsx from 'clsx';
import Link from "next/link";

const variants = {
    light: {
        primaryColor: "bg-button-button-2",
        secondaryColor: "bg-button-button-5",
        primaryTextColor: "text-text-secondary",
        secondaryTextColor: "text-text-secondary",
    },
    dark: {
        primaryColor: "bg-button-button-1",
        secondaryColor: "bg-button-button-2",
        primaryTextColor: "text-text-primary",
        secondaryTextColor: "text-text-secondary",
    }
};

export default function SubmitButton({ text, className, variant }) {

    const { primaryColor, secondaryColor, primaryTextColor, secondaryTextColor } = variants[variant] || variants.dark;

    return (
        <ShadCNButton
            type="submit"
            style={{borderRadius: "9999px", position: "relative"}}
            className={clsx(
                `group relative transition transform ${primaryColor} duration-200 ease-in-out p-6 overflow-hidden`,
                className
            )}
        >
            <span
                className={`absolute inset-0 ${secondaryColor} w-0 transition-all duration-300 ease-in-out group-hover:w-full`}/>
            <Link
                href={""}
                className={`inline-flex w-full h-full justify-center ${primaryTextColor} group-hover:${secondaryTextColor} items-center font-semibold relative z-10`}
            >
                {text}
            </Link>
        </ShadCNButton>
    );
}
