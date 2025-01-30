import Image from "next/image";

export default function Bullet({ title, text }) {
    return (
        <div className="flex flex-row items-start gap-2 sm:gap-3 w-full">
            <Image
                className="bg-white"
                src="/globe.svg"
                alt="bullet"
                width={24}
                height={24}
                unoptimized
            />
            <div className="space-y-1 sm:space-y-2">
                <h3 className="w-11/12 font-bold text-text-primary text-lg sm:text-base leading-none">
                    {title}
                </h3>
                <p className="w-11/12 text-text-primary text-sm sm:text-base">{text}</p>
            </div>
        </div>
    );
}
