import Image from "next/image";
import ActionButton from "@/common/Buttons/ActionButton";

export default function DoubleImageSection({ reverse, title, text, buttonText }) {
    return (
        <div className="mt-10 mb-10 lg:mt-20 lg:mb-20">
            <div className={`w-10/12 mx-auto flex flex-col sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""}`}>
                <div className="sm:w-1/2 2xl:w-8/12">
                    <div className={`w-full flex flex-row space-x-10 sm:space-x-0 xl:space-x-10 ${reverse ? "sm:justify-end" : "justify-start"}`}>
                        <Image
                            className="max-w-[150px] sm:max-w-[250px] md:max-w-[350px] 3xl:max-w-[453px] h-auto"
                            src="/homepage-small.png"
                            alt="workers"
                            width={435}
                            height={513}
                            unoptimized
                        />
                        <Image
                            className="block sm:hidden 2xl:block max-w-[150px] sm:max-w-[250px] md:max-w-[350px] 3xl:max-w-[453px] h-auto"
                            src="/homepage-small.png"
                            alt="workers"
                            width={435}
                            height={513}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="w-11/12 md:w-1/2 2xl:w-4/12 flex flex-col justify-end items-start">
                    <div className={`${!reverse ? "ml-0 sm:ml-10 lg:ml-0" : "sm:mr-10 lg:mr-0"}`}>
                            <h2 className="mt-5 lg:mt-0 text-xl font-bold">{title}</h2>
                            <p className="mt-3 mb-10">{text}</p>
                            <ActionButton text={buttonText} link={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
