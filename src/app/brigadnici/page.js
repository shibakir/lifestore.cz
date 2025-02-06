import HeroSection from "@/common/Sections/HeroSection";
import TitleBulletSectionWithImage from "@/common/Sections/TitleBulletSectionWithImage";
import ActionSection from "@/common/ActionSection/ActionSection";

export default function Work() {

    const firstImageSrc = "/homepage-small.png"

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
                    variant={"inverted"}
                />

                <TitleBulletSectionWithImage
                    title={"Proč vybrat Lifestore"}
                    items={itemsSecond}
                    className="!pt-12 !pb-12 lg:!pt-24 lg:!pb-24"
                />
            </div>
        </>
    );
}
