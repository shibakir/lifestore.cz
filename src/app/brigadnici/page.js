import HeroSection from "@/common/Sections/HeroSection";
import TitleBulletSectionWithImage from "@/common/Sections/TitleBulletSectionWithImage";
import ActionSection from "@/common/ActionSection/ActionSection";
import { metadata } from "@/constants/metadata";

export const generateMetadata = () => ({
    title: metadata.workers.title,
    description: metadata.workers.description,
});

export default function Work() {

    const firstImageSrc = "/homepage-small.png"

    const itemsFirst = [
        { id:1, title: "Flexibilita", text: "Vyberte si směny podle svého školního rozvrhu nebo zaměstnání. U nás se pracuje podle vašich časových možností." },
        { id:2, title: "Rozmanitost", text: "Už nemusíte hledat brigády po celém městě. U nás najdete vše od malých firemních akcí až po velké mezinárodní kongresy." },
        { id:3, title: "Exkluzivita", text: "Pracujte v prostředích, která jsou obvykle uzavřena pro veřejnost. Naše eventy jsou vrcholem toho, co můžete v oboru zažít." },
        { id:4, title: "Praxe v zahraničí", text: "Občas se naskytne příležitost jet pracovat na eventy pořádané v zahraničí. Získejte zkušenosti, které se počítají!" },
    ];

    const itemsSecond = [
        { id:1, title: "Atraktivní finanční ohodnocení", text: "Nabízíme konkurenceschopné mzdy a bonusy za výkon. U nás nejen získáte cenné zkušenosti, ale také adekvátní finanční ohodnocení." },
        { id:2, title: "Maximální flexibilita směn", text: "Vyberte si, kdy a kde chcete pracovat. Naše flexibilní směny umožňují skloubit brigádu se studiem nebo osobním životem." },
        { id:3, title: "Přístup k prestižním akcím", text: "Získejte cenné zkušenosti, které vám otevřou dveře a novým příležitostem a kontaktům." },
    ];

    return (
        <>
            <div>
                <HeroSection
                    title={"Připojte se k Lifestore a prožijte brigádu jinak!"}
                    text={"Sháníte spolehlivé brigádníky? Naší předností je maximální flexibilita a rychlé" +
                        "zprostředkování. Ušetřete administrativní náklady a váš čas, my se o vše postaráme. " +
                        "Garantujeme vám rychlost a kvalitu, aby se vaše pozornost mohla plně soustředit na" +
                        "rozvoj vašeho podnikání."}
                    variant={"workers"}
                />
            </div>
            <div className="main">
                <TitleBulletSectionWithImage
                    title={"Proč zvolit brigádu právě u nás?"}
                    text={"Lifestore přináší brigádám nový rozměr! Připojte se k nám a zažijte nejprestižnější eventy" +
                        " v Česku a na Slovensku. Na trhu jsme více než deset let a naše platforma je skvělým odrazovým " +
                        "můstkem pro další kariérní rozvoj. Získejte nejen práci, ale i zážitky, které vám zůstanou a " +
                        "otevřou dveře do světa velkých možností a nových příležitostí."}
                    items={itemsFirst}
                    imageSrc={firstImageSrc}
                />

                <ActionSection
                    title={"Napište nám hned, ať se můžete dostat rychle k vaší vysněné brigádě. Nečekejte, připojte se k nám už teď!"}
                    buttonText={"Zaregistrovat se"}
                    link={"#formular-pro-hostesky"}
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
