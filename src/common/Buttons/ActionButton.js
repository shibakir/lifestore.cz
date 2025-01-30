import { Button as ShadCNButton } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';

export default function ActionButton({ text, link, className }) {
    return (
        <ShadCNButton
            className={clsx(
                "group transition transform duration-200 ease-in-out hover:scale-105",
                className
            )}
            style={{ borderRadius: "9999px" }}
        >
            <Link href={link} className="inline-flex w-full h-full justify-center items-center">
                {text}
            </Link>
        </ShadCNButton>
    );
}
