import clsx from "clsx";

export default function Title({ title, className="" }) {

    return (
        <div>
            <h2
                className={clsx(className,
                    "font-semibold text-lg xl:text-xl"
                )}
            >
                {title}
            </h2>
        </div>
    )
}