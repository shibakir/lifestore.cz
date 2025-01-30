import { Button as ShadCNButton } from '@/components/ui/button';
import clsx from 'clsx';

export default function SubmitButton({ text, className }) {
    return (
        <ShadCNButton
            type="submit"
            style={{ borderRadius: "9999px" }}
            className={clsx(
                "",
                className
            )}
        >
            {text}
        </ShadCNButton>
    );
}
