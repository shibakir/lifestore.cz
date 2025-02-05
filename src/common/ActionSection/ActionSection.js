import ActionButton from "@/common/Buttons/ActionButton";
import Title from "@/common/Title";

export default function ActionSection({}) {

    return (
        <div className="w-6/8">
            <div className="actionSection bg-background-tertiary pb-4 rounded-[1vw]">
                <div className="flex flex-row bg-background-secondary rounded-[1vw] p-14">
                    <div className="actionSectionText flex items-center justify-center">
                        <div style={{width: "85%"}}>
                            <Title
                                title={"Neztrácejte čas – kontaktujte nás dnes a zjistěte, " +
                                    "jak můžeme usnadnit vaši cestu k úspěchu!"}
                                className="text-text-secondary font-semibold"
                            />
                        </div>
                    </div>
                    <div className="marginContainer"/>
                    <div className="actionSectionButton flex items-center justify-center">
                        <ActionButton
                            text={"Kontaktujte nás nyní"}
                            link={""}
                            className="xl:p-7 text-lg bg-background-tertiary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}