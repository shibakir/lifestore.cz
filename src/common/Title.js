import clsx from "clsx";

export default function Title({ title, className="" }) {

    return (
        <h2
            className={clsx(className,
                "font-semibold text-lg xl:text-xl"
            )}
        >
            {title}
        </h2>
    )
}