import Title from "@/common/Title";
import Text from "@/common/Text";
import ActionButton from "@/common/Buttons/ActionButton";
import clsx from "clsx";

export default function TextSectionWithButton({title, text, buttonText, link, className=""}) {

    return (
        <div
            className={clsx(className,
                ""
            )}
        >
            <Title title={title} className="mb-2"/>
            <Text text={text} className="mb-10"/>
            <ActionButton text={buttonText} link={link}/>
        </div>
    )
}