import Title from "@/common/Title";
import Text from "@/common/Text";
import BulletList from "@/common/BulletList/BulletList";

export default function TitleBulletSectionWithImage({ title, text }) {

    const items = [
        { id:1, title: "Hostesky a promotéři", text: "Profesionální tým pro firemní akce, veletrhy, road show, prezentace ochutnávky a další." },
        { id:2, title: "Personál pro hotely a restaurace", text: "Zajišťujeme vše od brigádníků na debaras po servírky a obsluhu recepcí s důrazem na kvalitu služeb." },
        { id:3, title: "Brigádníci", text: "Tým brigádníků pro podporu vašeho podnikání. Nabízíme sekretářky, bedňáky a více." },
        { id:4, title: "Digitální obsah", text: "Nabízíme brigádníky na správu digitálního obsahu. Od správy sociálních sítí, po tvorbu videí." },
    ];

    return (
        <div className="main flex flex-row pt-36 pb-36">
            <div
                className="w-8/12 pr-36"
            >
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center justify-between pb-8">
                        <Title
                            title={title}
                            className="text-text-secondary font-semibold"
                        />
                        <hr className="w-2/3 h-1 bg-background-quaternary border-none"/>
                    </div>
                    <div className="w-3/4">
                        <Text text={text} />
                    </div>
                </div>
                <div>
                    <BulletList items={items} />
                </div>
            </div>
            <div className="w-4/12 bg-[url('/homepage-small.png')] bg-cover bg-center min-h-[513px] rounded-b-[2vw] rounded-t-[2vw]"></div>
        </div>
    )
}