import BulletListHomepage from "@/common/BulletList/BulletListHomepage";
import HomepageHeroButton from "@/common/Buttons/HomepageHeroButton";

export default function HeroSectionHomepage() {
    return (
        <div
            className="bg-background-tertiary flex flex-col"
        >
            <div
                className="h-[220px] sm:h-[40vw] bg-[url('/homepage/hero.webp')] bg-cover bg-center
                            rounded-bl-[5vw] rounded-br-[5vw] relative">
                <div className="main flex flex-row h-full">
                    <div className=" w-1/2 flex flex-col justify-center">
                        <h1 className="font-[600] text-md lg:text-2xl leading-[20px] lg:leading-[30px] xl:text-3xl xl:leading-[40px] 2xl:text-4xl 2xl:leading-[56px] text-text-secondary">
                            Vaše akce,<br/>náš profesionální tým
                        </h1>
                        <p className="hidden sm:block text-xs md:text-md lg:text-lg xl:text-xl mt-2 md:mt-5 mb-5 md:mb-10">
                            Pomáháme vaší společnosti vyniknout mezi konkurencí.<br/>
                            Spolehlivost a kvalita je naším standardem!
                        </p>
                        <p className="block sm:hidden text-xs md:text-md lg:text-lg xl:text-xl mt-2 md:mt-5 mb-5 md:mb-10">
                            Spolehlivost a kvalita je naším standardem!
                        </p>
                        <div>
                            <HomepageHeroButton
                                text={"Poptat naše služby"}
                                link={"#formular-pro-klienty"}
                                variant={"dark"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background-tertiary pt-10 pb-10 lg:pt-16 lg:pb-16 relative">
                <div className="main flex flex-row">
                    <BulletListHomepage/>
                </div>
            </div>
        </div>
    );
}
