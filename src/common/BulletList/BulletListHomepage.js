import Bullet from "@/common/BulletList/Bullet";

export default function BulletListHomepage({}) {

    const items = [
        { id:1, title: "Hostesky a promotéři", text: "Profesionální tým pro firemní akce, veletrhy, road show, prezentace ochutnávky a další." },
        { id:2, title: "Personál pro hotely a restaurace", text: "Zajišťujeme vše od brigádníků na debaras po servírky a obsluhu recepcí s důrazem na kvalitu služeb." },
        { id:3, title: "Brigádníci", text: "Tým brigádníků pro podporu vašeho podnikání. Nabízíme sekretářky, bedňáky a více." },
        { id:4, title: "Digitální obsah", text: "Nabízíme brigádníky na správu digitálního obsahu. Od správy sociálních sítí, po tvorbu videí." },
    ];

    return (
        <div className="lg:mt-5 flex flex-row flex-wrap">
            {items.map((item, index) => (
                <div className="mt-5 w-full md:w-1/2 xl:w-1/4" key={item.id}>
                    <Bullet key={index} title={item.title} text={item.text} variant={"homepage"}/>
                </div>
            ))}
        </div>
    )
}