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
                "" +
                (active
                    ? ""
                    : "") +
                className
            }
        >
            {children}
        </Link>
    )
}