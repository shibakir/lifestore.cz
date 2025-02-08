import ActionButton from "@/common/Buttons/ActionButton";
import Title from "@/common/Title";

const variants = {
    default: {
        mainColor: "bg-background-secondary",
        secondaryColor: "bg-background-tertiary",
        buttonColor: "bg-background-tertiary",
        textColor: "text-text-secondary",
        buttonTextColor: "text-text-primary",
        buttonVariant: "dark",
    },
    inverted: {
        mainColor: "bg-background-tertiary",
        secondaryColor: "bg-background-quaternary",
        buttonColor: "bg-background-quaternary",
        textColor: "text-text-primary",
        buttonTextColor: "text-text-secondary",
        buttonVariant: "light",
    },
};

export default function ActionSection({title, buttonText, link="", variant}) {

    const { mainColor, secondaryColor, buttonColor, textColor, buttonTextColor, buttonVariant } = variants[variant] || variants.default;

    return (
        <div className="lg:w-6/8">
            <div className={`actionSection ${secondaryColor} pb-4 rounded-[3vw] lg:rounded-[1vw]`}>
                <div className={`flex flex-col lg:flex-row ${mainColor} rounded-[3vw] lg:rounded-[1vw] pt-5 pb-5 lg:p-14 space-y-2 items-center justify-center`}>
                    <div className="actionSectionText flex items-center justify-center">
                        <div className="w-full lg:w-8/10 flex text-center lg:text-start">
                            <Title
                                title={title}
                                className={`${textColor} font-semibold`}
                            />
                        </div>
                    </div>
                    <div className="marginContainer"/>
                    <div className="actionSectionButton flex justify-center">
                        <div className="flex flex-row justify-start">
                            <ActionButton
                                text={buttonText}
                                link={link}
                                className={`xl:p-7 text-lg`}
                                variant={buttonVariant}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}