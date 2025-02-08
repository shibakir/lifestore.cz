"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel() {
    const images = [
        { id: 0, image: "/gallery/test1.jpeg" },
        { id: 10, image: "/gallery/test2.jpeg" },
        { id: 1, image: "/gallery/first-collage/w-image.png" },
        { id: 2, image: "/gallery/first-collage/h-image.png" },
        { id: 3, image: "/gallery/first-collage/h-image.png" },
        { id: 4, image: "/gallery/first-collage/h-image.png" },
        { id: 5, image: "/gallery/first-collage/h-image.png" },
        { id: 6, image: "/gallery/first-collage/w-image.png" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setImageLoaded(false);
        }
    }, [currentIndex, isOpen]);

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
            <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md">

            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-[90%] h-[80%] lg:w-[80%] lg:h-[80%] flex flex-col items-center justify-center relative p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-text-primary">
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
                                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out cursor-pointer ${
                                    fade ? "opacity-0" : "opacity-100"
                                }`}
                                loading="lazy"
                                onLoad={() => setImageLoaded(true)}
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
