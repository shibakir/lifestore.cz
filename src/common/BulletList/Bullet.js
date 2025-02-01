import Image from "next/image";
import clsx from "clsx";

const variants = {
    default: { imageSrc: "/file.svg", styleTitle: "text-text-secondary", styleText: "text-text-secondary" },
    homepage: { imageSrc: "/globe.svg", styleTitle: "text-text-primary", styleText: "text-text-primary" },
};

export default function Bullet({ title, text, variant = "default" }) {
    const { imageSrc, styleTitle, styleText } = variants[variant] || variants.default;

    return (
        <div className="flex flex-row items-start gap-2 sm:gap-3 w-full">
            <Image
                className="bg-white"
                src={imageSrc}
                alt="bullet"
                width={24}
                height={24}
                unoptimized
            />
            <div className="space-y-1 sm:space-y-2">
                <h3
                    className={clsx(styleTitle,
                        "w-11/12 font-bold text-lg sm:text-base leading-none"
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
