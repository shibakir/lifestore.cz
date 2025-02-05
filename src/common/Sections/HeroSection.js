import Title from "@/common/Title";
import HeroButton from "@/common/Buttons/HeroButton";

export default function HeroSection({title, text, buttonText="", link=""}) {

    return (
        <div className="w-full lg:min-h-[594] flex flex-col-reverse lg:flex-row justify-end bg-background-tertiary">
            <div className="lg:w-1/2 flex flex-row main lg:!main:hidden">
                <div className="lg:w-1/6"/>
                <div className="lg:w-5/6 flex flex-col justify-center items-start">
                    <div className="lg:w-3/4 mt-10 mb-10 lg:mt-0 lg:mb-0">
                        <Title
                            title={title}
                            className="text-text-primary"
                        />
                        <p className="text-xs md:text-md lg:text-lg mt-2 md:mt-5 mb-5 md:mb-10 text-text-primary">
                            {text}
                        </p>
                        <div>
                            {buttonText &&
                                <HeroButton
                                    text={buttonText}
                                    link={link}
                                    className="bg-background-secondary text-background-tertiary xl:p-7 text-lg"
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 min-h-[294] sm:min-h-[494] lg:min-h-0 bg-[url('/clients-hero.png')] bg-cover bg-center"/>
        </div>
    );
}
