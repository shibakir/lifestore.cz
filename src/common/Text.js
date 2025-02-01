import clsx from "clsx";

export default function Text({ text, className="" }) {

    return (
        <p
            className={clsx(className,
                "text-sm lg:text-lg"
            )}
        >
            {text}
        </p>
    )
}