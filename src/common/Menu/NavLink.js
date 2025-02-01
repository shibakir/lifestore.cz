import Link from "next/link";

export default function NavLink({
                                    active = false,
                                    className = "",
                                    children,
                                    ...props
                                }) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-lg leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-background-tertiary focus:border-pink text-black"
                    : "border-transparent text-background-tertiary hover:border-background-tertiary focus:text-background-tertiary focus:border-background-tertiary ") +
                className
            }
        >
            {children}
        </Link>
    );
}