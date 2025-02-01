import BulletList from "@/common/BulletList/BulletList";
import Title from "@/common/Title";
import Text from "@/common/Text";
import ActionButton from "@/common/Buttons/ActionButton";
import HeroButton from "@/common/Buttons/HeroButton";

export default function HeroSection() {
    return (
        <div
            className="bg-background-tertiary min-h-[calc(100vh-80px)] flex flex-col"
        >
            <div
                className="h-[25vh] lg:h-[40vw] xl:h-[35vw] bg-[url('/homepage-hero.png')] bg-cover bg-center
                            rounded-bl-[5vw] rounded-br-[5vw] relative">
                <div className="main flex flex-row h-full">
                    <div className=" w-1/2 flex flex-col justify-center">
                        <h1 className="font-[600] text-md lg:text-2xl lg:leading-[30px] xl:text-3xl xl:leading-[40px] 2xl:text-4xl 2xl:leading-[56px] text-text-secondary">
                            Vaše akce,<br/>náš profesionální tým
                        </h1>
                        <p className="text-xs md:text-md lg:text-lg xl:text-xl mt-2 md:mt-5 mb-5 md:mb-10">
                            Pomáháme vaší společnosti vyniknout mezi konkurencí.<br/>
                            Spolehlivost a kvalita je naším standardem!
                        </p>
                        <div>
                            <HeroButton
                                text={"Poptat naše služby"}
                                link={""}
                                className="bg-background-tertiary"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background-tertiary pt-10 pb-10 lg:pt-16 lg:pb-16 relative">
                <div className="main flex flex-row">
                    <BulletList/>
                </div>
            </div>
        </div>
    );
}
