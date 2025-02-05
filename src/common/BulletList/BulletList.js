import Bullet from "@/common/BulletList/Bullet";

export default function BulletList({ items }) {

    return (
        <div className="mt-5 flex flex-row flex-wrap">
            {items.map((item, index) => (
                <div className="mt-5 lg:mt-10 w-full md:w-1/2" key={item.id}>
                    <Bullet key={index} title={item.title} text={item.text} variant={"default"}/>
                </div>
            ))}
        </div>
    )
}