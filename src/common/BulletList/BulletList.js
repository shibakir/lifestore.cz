import Bullet from "@/common/BulletList/Bullet";

export default function BulletList({ items }) {

    const isEven = items.length % 2 === 0;

    return (
        <div className="mt-4 lg:mt-5 flex flex-row flex-wrap">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`mt-5 lg:mt-10 w-full ${isEven ? "md:w-1/2" : "lg:w-1/3"}`}
                >
                    <Bullet title={item.title} text={item.text} variant={"default"} />
                </div>
            ))}
        </div>
    );
}
