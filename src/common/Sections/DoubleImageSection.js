import Image from "next/image";
import TextSectionWithButton from "@/common/Sections/TextSectionWithButton";
import clsx from "clsx";

export default function DoubleImageSection({ reverse, title, text, buttonText, link="", className=""}) {
    return (
        <div
            className={clsx(className,
                "mt-10 mb-10 lg:mt-20 lg:mb-20"
            )}
            >
            <div className={`w-10/12 mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
                <div className="mt-10 w-full md:w-1/2 2xl:w-8/12">
                    <div className={`twoImagesParentContainer xl:space-x-5 ${reverse ? "md:justify-end" : "justify-start"}`}>
                        <Image
                            src="/homepage/HP-fotka-05.webp"
                            alt="workers"
                            width={435}
                            height={513}
                            unoptimized
                        />
                        <Image
                            src="/homepage/mary_briga_dni_ci_1.webp"
                            alt="workers"
                            width={435}
                            height={513}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="w-11/12 md:w-1/2 2xl:w-4/12 flex flex-col justify-end items-start">
                    <div className={`${!reverse ? "ml-0 md:ml-10 lg:ml-0" : "md:mr-10 lg:mr-0"}`}>
                        <TextSectionWithButton
                            className="mt-5"
                            title={title}
                            buttonText={buttonText}
                            link={link}
                            text={text}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
