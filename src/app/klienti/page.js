import HeroSection from "@/common/Sections/HeroSection";
import TitleBulletSectionWithImage from "@/common/Sections/TitleBulletSectionWithImage";
import ActionSection from "@/common/ActionSection/ActionSection";

export default function Client() {

    const firstImageSrc = "/homepage-small.png"
    const secondImageSrc = "/homepage-small.png"

    const itemsFirst = [
        { id:1, title: "Hostesky a promotéři", text: "Profesionální tým pro firemní akce, veletrhy, road show, prezentace ochutnávky a další." },
        { id:2, title: "Personál pro hotely a restaurace", text: "Zajišťujeme vše od brigádníků na debaras po servírky a obsluhu recepcí s důrazem na kvalitu služeb." },
        { id:3, title: "Brigádníci", text: "Tým brigádníků pro podporu vašeho podnikání. Nabízíme sekretářky, bedňáky a více." },
        { id:4, title: "Digitální obsah", text: "Nabízíme brigádníky na správu digitálního obsahu. Od správy sociálních sítí, po tvorbu videí." },
    ];

    const itemsSecond = [
        { id:1, title: "Hostesky a promotéři", text: "Profesionální tým pro firemní akce, veletrhy, road show, prezentace ochutnávky a další." },
        { id:2, title: "Personál pro hotely a restaurace", text: "Zajišťujeme vše od brigádníků na debaras po servírky a obsluhu recepcí s důrazem na kvalitu služeb." },
        { id:3, title: "Brigádníci", text: "Tým brigádníků pro podporu vašeho podnikání. Nabízíme sekretářky, bedňáky a více." },
        { id:4, title: "Digitální obsah", text: "Nabízíme brigádníky na správu digitálního obsahu. Od správy sociálních sítí, po tvorbu videí." },
    ];

    const itemsThird = [
        { id:1, title: "Flexibilita", text: "Nabízíme přizpůsobení služeb vašim specifickým potřebám, abyste měli k dispozici přesně to, co potřebujete." },
        { id:2, title: "Rychlá dostupnost", text: "Potřebujete okamžitou pomoc? Jsme připraveni rychle reagovat na vaše požadavky a sehnat potřebný brigádníky." },
        { id:3, title: "Odbornost a zkušenosti", text: "Každý z našich brigádníků prochází důkladným výběrem a školením, abychom zajistili splnění vašich nároků." },
    ];

    return (
        <>
            <div>
                <HeroSection
                    title={"Najděte spolehlivé brigádníky – když je každá minuta důležitá"}
                    text={"Sháníte spolehlivé brigádníky? Naší předností je maximální flexibilita a rychlé" +
                        "zprostředkování. Ušetřete administrativní náklady a váš čas, my se o vše postaráme." +
                        "Garantujeme vám rychlost a kvalitu, aby se vaše pozornost mohla plně soustředit na" +
                        "rozvoj vašeho podnikání."}
                    buttonText={"Poptat brigádníky"}
                    link={""}
                />
            </div>
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
                    link={""}
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
