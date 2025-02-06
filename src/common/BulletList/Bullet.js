import Image from "next/image";
import clsx from "clsx";

const variants = {
    default: { imageSrc: "/bullet/bullet-dark.svg", styleTitle: "text-text-secondary", styleText: "text-text-secondary" },
    homepage: { imageSrc: "/bullet/bullet-light.svg", styleTitle: "text-text-primary", styleText: "text-text-primary" },
};

export default function Bullet({ title, text, variant = "default" }) {
    const { imageSrc, styleTitle, styleText } = variants[variant] || variants.default;

    return (
        <div className="flex flex-row items-start gap-2 sm:gap-3 w-full">
            <Image
                src={imageSrc}
                alt="bullet"
                width={24}
                height={24}
                unoptimized
                className="w-4 h-4 lg:w-5 lg:h-5"
            />
            <div className="space-y-1 sm:space-y-2">
                <h3
                    className={clsx(styleTitle,
                        "w-11/12 font-semibold lg:font-bold text-base leading-none"
                    )}
                >
                    {title}
                </h3>
                <p
                    className={clsx(styleText,
                        "w-11/12 text-text-primary text-sm sm:text-base"
                    )}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
