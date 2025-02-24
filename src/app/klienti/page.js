import HeroSection from "@/common/Sections/HeroSection";
import TitleBulletSectionWithImage from "@/common/Sections/TitleBulletSectionWithImage";
import ActionSection from "@/common/ActionSection/ActionSection";
import { metadata } from "@/constants/metadata";

export const generateMetadata = () => ({
    title: metadata.clients.title,
    description: metadata.clients.description,
});

export default function Client() {

    const firstImageSrc = "/clients/clients-1.webp"
    const secondImageSrc = "/clients/clients-2.webp"

    const itemsFirst = [
        { id:1, title: "Eventové hostesky", text: "Perfektně připravené hostesky pro vaše firemní události, koncerty, road show a mnoho dalších příležitostí." },
        { id:2, title: "Promo hostesky", text: "Expertky na propagaci vašich produktů a služeb na veletrzích, festivalech, ochutnávkách a jiných eventech." },
        { id:3, title: "VIP hostesky", text: "Exkluzivní hostesky splňující nejvyšší standardy vzhledu a profesionality. Jednotně upravené pro vaše nejdůležitější akce." },
        { id:4, title: "Recepční hostesky", text: "Poskytujeme profesionální a přátelskou obsluhu pro vaše hotelové a firemní recepce." },
    ];

    const itemsSecond = [
        { id:1, title: "Číšníci a servírky", text: "Zkušení profesionálové připraveni poskytnout prvotřídní obsluhu vašim zákazníkům." },
        { id:2, title: "Obsluha zákazníků", text: "Naši brigádníci jsou vyškoleni, aby poskytovali rychlou a přátelskou obsluhu, což zajišťuje, že každý zákazník odchází spokojen." },
        { id:3, title: "Pracovníci na debaras", text: "Efektivní tým, který udrží váš provoz čistý a organizovaný." },
        { id:4, title: "Snídaňové hostesky", text: "Zajistíme, aby vaše ranní snídaňová nabídka byla prezentována s elegancí a profesionalitou." },
    ];

    const itemsThird = [
        { id:1, title: "Flexibilita", text: "Nabízíme přizpůsobení služeb vašim specifickým potřebám, abyste měli k dispozici přesně to, co potřebujete." },
        { id:2, title: "Rychlá dostupnost", text: "Potřebujete okamžitou pomoc? Jsme připraveni rychle reagovat na vaše požadavky a sehnat potřebný brigádníky." },
        { id:3, title: "Odbornost a zkušenosti", text: "Každý z našich brigádníků prochází důkladným výběrem a školením, abychom zajistili splnění vašich nároků." },
    ];

    return (
        <>
            <HeroSection
                title={"Najděte spolehlivé brigádníky – když je každá minuta důležitá"}
                text={"Sháníte spolehlivé brigádníky? Naší předností je maximální flexibilita a rychlé" +
                    "zprostředkování. Ušetřete administrativní náklady a váš čas, my se o vše postaráme." +
                    "Garantujeme vám rychlost a kvalitu, aby se vaše pozornost mohla plně soustředit na" +
                    "rozvoj vašeho podnikání."}
                buttonText={"Poptat brigádníky"}
                link={"#formular-pro-klienty"}
                variant={"clients"}
                image={"/clients/hero.webp"}
            />
            <div className="main">
                <TitleBulletSectionWithImage
                    title={"Hostesky a promotéři"}
                    text={"Naše agentura Lifestore má více než desetiletou zkušenost s poskytováním " +
                        "profesionálních hostesek a promotérů po celé České republice a na Slovensku." +
                        " Jsme hrdí na to, že jsme doposud nasadili tisíce spolehlivých a kvalifikovaných" +
                        " hostesek a promotérů pro širokou škálu akcí."}
                    items={itemsFirst}
                    imageSrc={firstImageSrc}
                />

                <ActionSection
                    title={"Neztrácejte čas – kontaktujte nás dnes a zjistěte, jak můžeme usnadnit vaši cestu k úspěchu!"}
                    buttonText={"Kontaktujte nás nyní"}
                    link={"#formular-pro-klienty"}
                />

                <TitleBulletSectionWithImage
                    title={"Brigádníci do gastro provozů"}
                    text={"Lifestore, již uznávaný v oblasti personálních služeb, v roce 2022 úspěšně rozšířil svou" +
                        " nabídku o zajišťování pracovníků pro gastro sektor. Naše reputace jako spolehlivého partnera" +
                        " roste mezi hotely, restauracemi a kavárnami."}
                    items={itemsSecond}
                    imageSrc={secondImageSrc}
                />
            </div>
            <div className="bg-background-secondary rounded-tl-[5vw] rounded-tr-[5vw]">
                <div className="main flex flex-col-reverse lg:flex-row">
                    <TitleBulletSectionWithImage
                        title={"Proč vybrat Lifestore"}
                        items={itemsThird}
                        className="!pt-12 !pb-12 lg:!pt-24 lg:!pb-24"
                    />
                </div>
            </div>
        </>
    );
}
