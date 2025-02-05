import HeroSection from "@/common/Sections/HeroSection";
import TitleBulletSectionWithImage from "@/common/Sections/TitleBulletSectionWithImage";
import ActionSection from "@/common/ActionSection/ActionSection";

export default function Client() {

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
                />

                <ActionSection/>
            </div>
        </>
    );
}
