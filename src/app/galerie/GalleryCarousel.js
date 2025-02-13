"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {Button as ShadCNButton} from "@/components/ui/button";

function GalleryCarousel({ images, initialIndex = 0, isCarouselOpen, setIsCarouselOpen }) {
    const [isOpen, setIsOpen] = useState(isCarouselOpen);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setIsOpen(isCarouselOpen);
    }, [isCarouselOpen]);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    const closeCarousel = () => {
        setIsOpen(false);
        setIsCarouselOpen(false);
    };

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 300);
    };

    const prevImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 300);
    };

    return (
        <div className="relative">
            {isOpen && (
                <div
                    className="fixed inset-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50"
                    onClick={closeCarousel}
                >
                    <div
                        className="w-[90%] h-[80%] lg:w-[80%] lg:h-[80%] flex flex-col items-center justify-center relative p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeCarousel} className="absolute top-3 right-3 text-text-primary">
                            <X size={40}/>
                        </button>

                        <button onClick={prevImage}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-primary lg:block hidden">
                            <ChevronLeft size={70}/>
                        </button>

                        <div
                            className="flex items-center justify-center max-w-[100%] lg:max-w-[95%] max-h-full overflow-hidden">
                            <img
                                key={images[currentIndex].id}
                                src={images[currentIndex].image}
                                alt="Gallery photo"
                                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out cursor-pointer ${fade ? "opacity-0" : "opacity-100"}`}
                                loading="lazy"
                            />
                        </div>

                        <button onClick={nextImage}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-primary lg:block hidden">
                            <ChevronRight size={70}/>
                        </button>

                        <div className="lg:hidden absolute bottom-3 left-0 w-full flex justify-center gap-x-20">
                            <button onClick={prevImage} className="text-text-primary">
                                <ChevronLeft size={60}/>
                            </button>
                            <button onClick={nextImage} className="text-text-primary">
                                <ChevronRight size={60}/>
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

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