import Title from "@/common/Title";
import Text from "@/common/Text";
import BulletList from "@/common/BulletList/BulletList";
import clsx from "clsx";

export default function TitleBulletSectionWithImage({ title, text="", items, imageSrc="", className="" }) {

    return (
        <div
            className={clsx(className,
                "flex flex-col lg:flex-row pt-12 pb-12 lg:pt-20 lg:pb-20 xl:pt-36 xl:pb-36"
            )}
            >
            <div className={`${imageSrc ? "lg:w-9/12 lg:pr-36" : ""}`}>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center justify-between">
                        <Title
                            title={title}
                            className="text-text-secondary font-semibold"
                        />
                        <hr className="flex-grow ml-8 h-0.5 sm:h-1 bg-background-quaternary border-none"/>
                    </div>
                    {text &&
                        <div className="lg:w-3/4 pt-6 lg:pt-8">
                            <Text text={text}/>
                        </div>
                    }
                </div>
                <div>
                    <BulletList items={items} />
                </div>
            </div>
            {imageSrc &&
                <div
                    className="lg:w-3/12 2xl:h-[500px] 2xl:ml-20 2xl:mr-20 rounded-b-[2vw] rounded-t-[2vw]"
                    style={{backgroundImage: `url(${imageSrc})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
            }

        </div>
    )
}