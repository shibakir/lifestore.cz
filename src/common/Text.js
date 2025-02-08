import clsx from "clsx";

export default function Text({ text, className="" }) {

    return (
        <p
            className={clsx(className,
                "font-light text-sm lg:text-lg mb-[-5]"
            )}
        >
            {text.split("\n").map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </p>
    )
}