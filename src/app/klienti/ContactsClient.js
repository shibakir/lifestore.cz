"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Title from "@/common/Title";
import { Button as ShadCNButton } from "@/components/ui/button";

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

export default function ContactsClient() {
    const people = [
        { id: 1, name: "Marika Pušová", image: "/Contacts_sample.png", title: "Jednatelka společnosti" },
        { id: 2, name: "Michaela Šprynarová", image: "/Contacts_sample.png", title: "Zástupce jednatelky" },
        { id: 3, name: "Viktorie Rakušanová", image: "/Contacts_sample.png", title: "Senior event manager" },
        { id: 4, name: "Ondřej Laibl", image: "/Contacts_sample.png", title: "Event manager" },
        { id: 5, name: "Jiří Komínke", image: "/Contacts_sample.png", title: "Event manager" },
    ];

    const [visibleCount, setVisibleCount] = useState(people.length);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
                setVisibleCount(3);
            } else {
                setIsMobile(false);
                setVisibleCount(people.length);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    const showMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

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
                {people.slice(0, visibleCount).map((item) => (
                    <SingleContact
                        key={item.id}
                        name={item.name}
                        text={item.title}
                        image={item.image}
                    />
                ))}
            </div>
            {isMobile && visibleCount < people.length && (
                <div className="mt-8 flex justify-center">
                    <ShadCNButton
                        onClick={showMore}
                        className="min-w-fit group relative transition transform bg-button-button-1 duration-200 ease-in-out p-6 overflow-hidden"
                        style={{ borderRadius: "9999px", position: "relative" }}
                    >
                        <span className="absolute inset-0 bg-button-button-2 w-0 transition-all duration-300 ease-in-out group-hover:w-full"/>
                        <span
                            className="inline-flex w-full h-full justify-center text-text-primary group-hover:text-text-secondary items-center font-semibold relative z-10"
                        >
                                Zobrazit více
                            </span>
                    </ShadCNButton>
                </div>
            )}
        </div>
    );
}
