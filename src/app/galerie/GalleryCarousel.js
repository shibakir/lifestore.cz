"use client";

import { useState } from "react";
import {Button as ShadCNButton} from "@/components/ui/button";
import GalleryCarousel from "@/common/GalleryCarousel/GalleryCarousel";


export function ImagesCollageDesktop({images, buttonText}) {

    const [visibleCount, setVisibleCount] = useState(6);

    const loadMoreImages = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 2xl:gap-8">
                {images.slice(0, visibleCount).map((item, index) => (
                    <div
                        key={item.id}
                        className={`cursor-pointer ${item.isVertical ? "col-span-1" : "col-span-2"}`}
                        onClick={() => {
                            setSelectedIndex(index);
                            setIsCarouselOpen(true);
                        }}
                    >
                        <img
                            loading="lazy"
                            src={item.image}
                            alt={`Gallery Image ${item.id}`}
                            className="cursor-pointer rounded-[2vh] w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {visibleCount < images.length && (
                <div className="flex justify-end mt-6">
                    <ShadCNButton
                        onClick={loadMoreImages}
                        className="min-w-fit group relative transition transform bg-button-button-1 duration-200 ease-in-out p-3 lg:p-6 overflow-hidden"
                        style={{borderRadius: "9999px", position: "relative"}}
                    >
                        <span className="absolute inset-0 bg-button-button-2 w-0 transition-all duration-300 ease-in-out group-hover:w-full"/>
                        <span
                            className="inline-flex w-full h-full justify-center text-text-primary group-hover:text-text-secondary items-center font-semibold relative z-10">
                            {buttonText}
                        </span>
                    </ShadCNButton>
                </div>
            )}

            <div className="flex justify-end mt-4 pr-5">
                <GalleryCarousel
                    images={images}
                    buttonText={buttonText}
                    initialIndex={selectedIndex}
                    isCarouselOpen={isCarouselOpen}
                    setIsCarouselOpen={setIsCarouselOpen}
                />
            </div>
        </div>
    );
}

export function ImagesCollageMobile({images, buttonText}) {

    const [visibleCount, setVisibleCount] = useState(6);

    const loadMoreImages = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {images.slice(0, visibleCount).map((item, index) => (
                    <div
                        key={item.id}
                        className={`${item.isVertical ? "col-span-1" : "col-span-2"}`}
                        onClick={() => {
                            setSelectedIndex(index);
                            setIsCarouselOpen(true);
                        }}
                    >
                        <img
                            loading="lazy"
                            src={item.image}
                            alt={`Gallery Image ${item.id}`}
                            className="cursor-pointer rounded-[3vh] w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {visibleCount < images.length && (
                <div className="flex justify-end mt-5">
                    <ShadCNButton
                        onClick={loadMoreImages}
                        className="min-w-fit group relative transition transform bg-button-button-1 duration-200 ease-in-out p-3 overflow-hidden"
                        style={{borderRadius: "9999px", position: "relative"}}
                    >
                        <span className="absolute inset-0 bg-button-button-2 w-0 transition-all duration-300 ease-in-out group-hover:w-full"/>
                        <span
                            className="inline-flex w-full h-full justify-center text-text-primary group-hover:text-text-secondary items-center font-sm relative z-10">
                            {buttonText}
                        </span>
                    </ShadCNButton>
                </div>
            )}

            <div className="flex justify-center mt-4">
                <GalleryCarousel
                    images={images}
                    buttonText={buttonText}
                    initialIndex={selectedIndex}
                    isCarouselOpen={isCarouselOpen}
                    setIsCarouselOpen={setIsCarouselOpen}
                />
            </div>
        </div>
    );
}