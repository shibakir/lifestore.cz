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
            <Title
                title={title}
                className="!mb-3"
            />
            <Text
                text={text}
                className="!mb-8"
            />
            <ActionButton
                text={buttonText}
                link={link}
            />
        </div>
    )
}