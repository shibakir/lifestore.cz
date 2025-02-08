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

export default function SubmitButton({ text, isSubmitted, className, variant }) {
    const {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor
    } = variants[variant] || variants.dark;

    return (
        <ShadCNButton
            type="submit"
            disabled={isSubmitted}
            style={{ borderRadius: "9999px", position: "relative" }}
            className={clsx(
                `group relative transition transform duration-200 ease-in-out p-6 overflow-hidden`,
                isSubmitted ? "bg-yellow-500 text-black" : primaryColor,
                className
            )}
        >
            {!isSubmitted && (
                <span className={`absolute inset-0 ${secondaryColor} w-0 transition-all duration-300 ease-in-out group-hover:w-full`} />
            )}
            <span
                className={clsx(
                    "inline-flex w-full h-full justify-center items-center font-semibold relative z-10",
                    isSubmitted ? "text-black" : primaryTextColor,
                    !isSubmitted && `group-hover:${secondaryTextColor}`
                )}
            >
                {isSubmitted ? "Odesláno" : text}
            </span>
        </ShadCNButton>
    );
}
