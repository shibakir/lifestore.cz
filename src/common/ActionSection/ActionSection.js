import ActionButton from "@/common/Buttons/ActionButton";
import Title from "@/common/Title";

export default function ActionSection({title, buttonText, link=""}) {

    return (
        <div className="lg:w-6/8">
            <div className="actionSection bg-background-tertiary pb-4 rounded-[1vw]">
                <div className="flex flex-col lg:flex-row bg-background-secondary rounded-[1vw] pt-5 pb-5 lg:p-14 space-y-5">
                    <div className="actionSectionText flex items-center justify-center ">
                        <div className="w-full lg:w-8/10 flex sm:text-center lg:text-start">
                            <Title
                                title={title}
                                className="text-text-secondary font-semibold"
                            />
                        </div>
                    </div>
                    <div className="marginContainer"/>
                    <div className="actionSectionButton flex items-center justify-center">
                        <ActionButton
                            text={buttonText}
                            link={link}
                            className="xl:p-7 text-lg bg-background-tertiary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}