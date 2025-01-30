import { Button as ShadCNButton } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Button({ text, link, className, icon, type="" }) {
    return (
        <ShadCNButton
            type={type}
            className={clsx(
                "group transition transform duration-200 ease-in-out hover:scale-105",
                className
            )}
        >
            {icon && <FontAwesomeIcon icon={icon} className="text-xl" />}
            <Link href={link} className="inline-flex w-full h-full justify-center items-center">
                {text}
            </Link>
        </ShadCNButton>
    );
}
