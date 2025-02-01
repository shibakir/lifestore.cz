import { Button as ShadCNButton } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';

export default function HeroButton({ text, link, className=""}) {
    return (
        <ShadCNButton
            className={clsx(
                "group transition transform duration-200 ease-in-out hover:scale-105 p-3 lg:p-6",
                className
            )}
            style={{ borderRadius: "9999px" }}
        >
            <Link
                href={link}
                className="inline-flex w-full h-full justify-center items-center text-xs xl:text-xl font-light"
            >
                {text}
            </Link>
        </ShadCNButton>
    );
}
