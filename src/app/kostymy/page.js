import {metadata} from "@/constants/metadata";
import Title from "@/common/Title";
import Text from "@/common/Text";
import CostumesSection from "@/app/kostymy/CostumesSection";

export const generateMetadata = () => ({
    title: metadata.costumes.title,
    description: metadata.costumes.description,
});

export default function Costumes() {

    return (
        <div className="main mt-16 xl:mt-36 xl:mb-36">
            <div className="w-full lg:w-1/2 xl:w-1/3">
                <div className="mb-5 flex flex-row items-center justify-between">
                    <Title title={"Naše kostýmy"} className="text-text-secondary font-semibold"/>
                    <hr className="flex-grow ml-5 lg:ml-8 h-0.5 sm:h-1 bg-background-quaternary border-none"/>
                </div>
                <div>
                    <Text
                        className="font-normal"
                        text={"Prohlédněte si naši nabídku a vyberte si kostým pro váš příští event. " +
                            "Každá fotografie má uvedený název kostýmu, " +
                            "který jednoduše zadáte do zprávy našeho poptávkového formuláře nebo e-mailu."}
                    />
                </div>
            </div>

            <CostumesSection/>
        </div>
    );
}