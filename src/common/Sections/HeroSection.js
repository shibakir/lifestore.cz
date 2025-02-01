import Title from "@/common/Title";
import HeroButton from "@/common/Buttons/HeroButton";

export default function HeroSection({title, text, buttonText="", link=""}) {

    return (
        <div className="w-full min-h-[594] flex flex-row justify-end">
            <div className="w-1/2 flex flex-row bg-background-tertiary">
                <div className="w-1/6"/>
                <div className="w-5/6 flex flex-col justify-center items-start">
                    <div className="w-3/4">
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
            <div className="w-1/2 bg-[url('/clients-hero.png')] bg-cover bg-center">
            </div>
        </div>
    );
}
