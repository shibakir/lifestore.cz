import Title from "@/common/Title";
import ActionButton from "@/common/Buttons/ActionButton";

const variants = {
    workers: {
        mainColor: "bg-background-secondary",
        textColor: "text-text-secondary",
    },
    clients: {
        mainColor: "bg-background-tertiary",
        textColor: "text-text-primary",
    },
};

export default function HeroSection({ title, text, buttonText="", link="", variant, image }) {

    const { mainColor, textColor } = variants[variant] || variants.workers;

    return (
        <div className={`w-full lg:min-h-[540px] flex flex-col-reverse lg:flex-row justify-end ${mainColor}`}>
            <div className="lg:w-1/2 flex flex-row main lg:!main:hidden">
                <div className="lg:w-1/6"/>
                <div className="lg:w-5/6 flex flex-col justify-center items-start">
                    <div className="lg:w-3/4 mt-10 mb-10 lg:mt-0 lg:mb-0">
                        <Title
                            title={title}
                            className={`${textColor}`}
                        />
                        <p className={`text-xs md:text-md lg:text-lg mt-2 md:mt-5 mb-5 md:mb-10 ${textColor}`}>
                            {text}
                        </p>
                        <div>
                            {buttonText &&
                                <ActionButton
                                    text={buttonText}
                                    link={link}
                                    className="xl:p-7 text-lg"
                                    variant={"light"}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="lg:w-1/2 min-h-[294] sm:min-h-[494] lg:min-h-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
        </div>
    );
}
