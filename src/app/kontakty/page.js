import Image from "next/image";
import Title from "@/common/Title";

export const metadata = {
    title: "Lifestore s.r.o - Kontakty",
    description: "Náš tým",
};

function Name({ title }) {
    return (
        <div className="flex flex-row items-center justify-between">
            <h2 className="font-semibold text-sm sm:text-lg text-text-secondary">
                {title}
            </h2>
            <hr className="flex-grow ml-5 mr-5 h-0.5 sm:h-1 bg-background-quaternary border-none"/>
        </div>
    );
}

function SingleContact({ name, text, image }) {
    return (
        <div className="flex flex-col items-center text-center">
            <Image
                className="rounded-lg object-cover"
                src={image}
                alt={name}
                width={265}
                height={314}
                unoptimized
            />
            <div className="mt-3 w-[265px]">
                <Name title={name} />
                <p className="mt-1 text-text-secondary text-sm sm:text-lg text-start leading-tight">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function Contacts() {
    const people = [
        { id: 1, name: "Jana Nováková1", image: "/Contacts_sample.png", title: "Koordinátorka brigádníků na akcích" },
        { id: 2, name: "Jana Nováková2", image: "/Contacts_sample.png", title: "Koordinátorka brigádníků na akcích" },
        { id: 3, name: "Jana Nováková3", image: "/Contacts_sample.png", title: "Koordinátorka" },
        { id: 4, name: "Jana Nováková4", image: "/Contacts_sample.png", title: "Koordinátorka brigádníků na akcích" },
        { id: 5, name: "Jana Nováková5", image: "/Contacts_sample.png", title: "Koordinátorka" },
        { id: 6, name: "Jana Nováková6", image: "/Contacts_sample.png", title: "Koordinátorka brigádníků na akcích" },
    ];

    return (
        <div className="main mt-20 mb-20">
            <div className="w-full lg:w-1/3 mb-10 flex flex-row items-center justify-between">
                <Title
                    title={"Náš tým"}
                    className="text-text-secondary font-semibold"
                />
                <hr className="flex-grow ml-5 lg:ml-8 h-0.5 sm:h-1 bg-background-quaternary border-none"/>
            </div>
            <div
                className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center lg:justify-items-start">
                {people.map((item) => (
                    <SingleContact
                        key={item.id}
                        name={item.name}
                        text={item.title}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}
