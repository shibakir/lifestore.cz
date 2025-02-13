"use client";

import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

export default function GalleryCarousel({ images, initialIndex = 0, isCarouselOpen, setIsCarouselOpen }) {
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