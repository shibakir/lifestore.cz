"use client"

import {useState} from "react";
import {Button as ShadCNButton, Button} from "@/components/ui/button";
import GalleryCarousel from "@/common/GalleryCarousel/GalleryCarousel";

const longDresses = [
    {id: 1, image: "/costumes/longDresses/01.jpg", text: "Dlouhé šaty 01"},
    {id: 2, image: "/costumes/longDresses/02.jpg", text: "Dlouhé šaty 02"},
    {id: 3, image: "/costumes/longDresses/03.jpg", text: "Dlouhé šaty 03"},
    {id: 4, image: "/costumes/longDresses/04.jpg", text: "Dlouhé šaty 04"},
    {id: 5, image: "/costumes/longDresses/05.jpg", text: "Dlouhé šaty 05"},
    {id: 6, image: "/costumes/longDresses/06.jpg", text: "Dlouhé šaty 06"},
    {id: 7, image: "/costumes/longDresses/07.jpg", text: "Dlouhé šaty 07"},
    {id: 8, image: "/costumes/longDresses/08.jpg", text: "Dlouhé šaty 08"},
]
const shortDresses = [
    {id: 1, image: "/costumes/shortDresses/01.jpg", text: "Krátké šaty 01"},
    {id: 2, image: "/costumes/shortDresses/02.jpg", text: "Krátké šaty 02"},
    {id: 3, image: "/costumes/shortDresses/03.jpg", text: "Krátké šaty 03"},
    {id: 4, image: "/costumes/shortDresses/04.jpg", text: "Krátké šaty 04"},
    {id: 5, image: "/costumes/shortDresses/05.jpg", text: "Krátké šaty 05"},
    {id: 6, image: "/costumes/shortDresses/06.jpg", text: "Krátké šaty 06"},
    {id: 7, image: "/costumes/shortDresses/07.jpg", text: "Krátké šaty 07"},
    {id: 8, image: "/costumes/shortDresses/08.jpg", text: "Krátké šaty 08"},
    {id: 9, image: "/costumes/shortDresses/09.jpg", text: "Krátké šaty 09"},
    {id: 10, image: "/costumes/shortDresses/10.jpg", text: "Krátké šaty 10"},
    {id: 11, image: "/costumes/shortDresses/11.jpg", text: "Krátké šaty 11"},
    {id: 12, image: "/costumes/shortDresses/12.jpg", text: "Krátké šaty 12"},
    {id: 13, image: "/costumes/shortDresses/13.jpg", text: "Krátké šaty 13"},
    {id: 14, image: "/costumes/shortDresses/14.jpg", text: "Krátké šaty 14"},
    {id: 15, image: "/costumes/shortDresses/15.jpg", text: "Krátké šaty 15"},
    {id: 16, image: "/costumes/shortDresses/16.jpg", text: "Krátké šaty 16"},
    {id: 17, image: "/costumes/shortDresses/17.jpg", text: "Krátké šaty 17"},
    {id: 18, image: "/costumes/shortDresses/18.jpg", text: "Krátké šaty 18"},
    {id: 19, image: "/costumes/shortDresses/19.jpg", text: "Krátké šaty 19"},
    {id: 20, image: "/costumes/shortDresses/20.jpg", text: "Krátké šaty 20"},
];
const coatsAndJackets = [
    {id: 1, image: "/costumes/coatsAndJackets/01.jpg", text: "Kabáty a saka 01"},
    {id: 2, image: "/costumes/coatsAndJackets/02.jpg", text: "Kabáty a saka 02"},
    {id: 3, image: "/costumes/coatsAndJackets/03.jpg", text: "Kabáty a saka 03"},
    {id: 4, image: "/costumes/coatsAndJackets/04.jpg", text: "Kabáty a saka 04"},
    {id: 5, image: "/costumes/coatsAndJackets/05.jpg", text: "Kabáty a saka 05"},
    {id: 6, image: "/costumes/coatsAndJackets/06.jpg", text: "Kabáty a saka 06"},
    {id: 7, image: "/costumes/coatsAndJackets/07.jpg", text: "Kabáty a saka 07"},
    {id: 8, image: "/costumes/coatsAndJackets/08.jpg", text: "Kabáty a saka 08"},
    {id: 9, image: "/costumes/coatsAndJackets/09.jpg", text: "Kabáty a saka 09"},
    {id: 10, image: "/costumes/coatsAndJackets/10.jpg", text: "Kabáty a saka 10"},
    {id: 11, image: "/costumes/coatsAndJackets/11.jpg", text: "Kabáty a saka 11"},
    {id: 12, image: "/costumes/coatsAndJackets/12.jpg", text: "Kabáty a saka 12"},
]
const scraves = [
    {id: 1, image: "/costumes/scraves/01.jpg", text: "Šátky 01"},
    {id: 2, image: "/costumes/scraves/02.jpg", text: "Šátky 02"},
    {id: 3, image: "/costumes/scraves/03.jpg", text: "Šátky 03"},
    {id: 4, image: "/costumes/scraves/04.jpg", text: "Šátky 04"},
    {id: 5, image: "/costumes/scraves/05.jpg", text: "Šátky 05"},
    {id: 6, image: "/costumes/scraves/06.jpg", text: "Šátky 06"},
    {id: 7, image: "/costumes/scraves/07.jpg", text: "Šátky 07"},
    {id: 8, image: "/costumes/scraves/08.jpg", text: "Šátky 08"},
]
const other = [
    {id: 1, image: "/costumes/other/01.jpg", text: "Ostatní 01"},
    {id: 2, image: "/costumes/other/02.jpg", text: "Ostatní 02"},
    {id: 3, image: "/costumes/other/03.jpg", text: "Ostatní 03"},
    {id: 4, image: "/costumes/other/04.jpg", text: "Ostatní 04"},
    {id: 5, image: "/costumes/other/05.jpg", text: "Ostatní 05"},
    {id: 6, image: "/costumes/other/06.jpg", text: "Ostatní 06"},
    {id: 7, image: "/costumes/other/07.jpg", text: "Ostatní 07"},
    {id: 8, image: "/costumes/other/08.jpg", text: "Ostatní 08"},
    {id: 9, image: "/costumes/other/09.jpg", text: "Ostatní 09"},
    {id: 10, image: "/costumes/other/10.jpg", text: "Ostatní 10"},
    {id: 11, image: "/costumes/other/11.jpg", text: "Ostatní 11"},
]

const controlButtons = [
    {id: 0, buttonText: "Dlouhé šaty", items: longDresses},
    {id: 1, buttonText: "Krátké šaty", items: shortDresses},
    {id: 2, buttonText: "Kabáty a saka", items: coatsAndJackets},
    {id: 3, buttonText: "Šátky", items: scraves},
    {id: 4, buttonText: "Ostatní", items: other},
]

export default function CostumesSection() {

    const [category, setCategory] = useState(controlButtons[0].id);

    const [visibleCount, setVisibleCount] = useState(8);

    const loadMoreImages = () => {
        setVisibleCount(prevCount => prevCount + 8);
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    return (
        <div className="mt-10 mb-10">
            <div className="w-full flex flex-col lg:flex-row lg:w-1/2 xl:w-fit bg-background-shadow mt-10 mb-10
                            rounded-[2vh] lg:rounded-full">
                {
                    controlButtons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() => setCategory(button.id)}
                            className={`text-text-secondary font-medium text-sm md:text-xs
                                ${category === button.id ? 'bg-button-button-2 rounded-none lg:rounded-[0.5vh]' : 'bg-button-button-6'} 
                                hover:bg-button-button-2 hover:rounded-[0.5vh]`}
                        >
                            {button.buttonText}
                        </Button>
                    ))
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10">
                {
                    controlButtons[category].items.slice(0, visibleCount).map((item, index) => (
                        <div
                            className="cursor-pointer"
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                                setIsCarouselOpen(true);
                            }}
                        >
                            <div
                                className="w-full max-h-[250px] xl:max-h-[400px] overflow-hidden relative object-cover">
                                <img
                                    loading="lazy"
                                    className="rounded-[2vh]"
                                    src={item.image}
                                    alt={item.text}
                                />
                            </div>
                            <div className="p-4 rounded-bl-[2vh] rounded-br-[2vh] bg-background-secondary">
                                <div className="w-2/3 lg:w-1/2 flex flex-row items-center justify-between">
                                    <p className="text-sm text-text-secondary">{item.text}</p>
                                    <hr className="flex-grow ml-5 h-0.5 bg-background-quaternary border-none"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {visibleCount < controlButtons[category].items.length && (
                <div className="flex justify-end mt-6">
                    <ShadCNButton
                        onClick={loadMoreImages}
                        className="min-w-fit group relative transition transform bg-button-button-1 duration-200 ease-in-out p-3 lg:p-6 overflow-hidden"
                        style={{borderRadius: "9999px", position: "relative"}}
                    >
                        <span
                            className="absolute inset-0 bg-button-button-2 w-0 transition-all duration-300 ease-in-out group-hover:w-full"/>
                        <span
                            className="inline-flex w-full h-full justify-center text-text-primary group-hover:text-text-secondary items-center font-sm relative z-10">
                            {"Načíst další kostýmy"}
                        </span>
                    </ShadCNButton>
                </div>
            )}

            <div className="flex justify-center mt-4">
                <GalleryCarousel
                    images={controlButtons[category].items}
                    buttonText={""}
                    initialIndex={selectedIndex}
                    isCarouselOpen={isCarouselOpen}
                    setIsCarouselOpen={setIsCarouselOpen}
                />
            </div>
        </div>
    );
}
