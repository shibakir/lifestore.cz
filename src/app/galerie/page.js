import Title from "@/common/Title";
import { metadata } from "@/constants/metadata";
import {ImagesCollageDesktop, ImagesCollageMobile} from "@/app/galerie/GalleryCarousel";

export const generateMetadata = () => ({
    title: metadata.gallery.title,
    description: metadata.gallery.description,
});

function GallerySection({title, images, buttonText, id}) {
    return (
        <div id={id} className="mb-10">
            <div className="w-full lg:w-1/2 xl:w-1/3 mb-5 lg:mb-10 flex flex-row items-center justify-between">
                <Title title={title} className="text-text-secondary font-semibold"/>
                <hr className="flex-grow ml-5 lg:ml-8 h-0.5 sm:h-1 bg-background-quaternary border-none"/>
            </div>

            <div className="block md:hidden">
                <ImagesCollageMobile images={images} buttonText={buttonText} />
            </div>
            <div className="hidden md:block">
                <ImagesCollageDesktop images={images} buttonText={buttonText} />
            </div>
        </div>
    );
}

export default function Gallery() {
    const imagesWorkers = [
        {id: 1, image: "/gallery/first-collage/w-image.png"},
        {id: 2, image: "/gallery/first-collage/h-image.png"},
        {id: 3, image: "/gallery/first-collage/h-image.png"},
        {id: 4, image: "/gallery/first-collage/h-image.png"},
        {id: 5, image: "/gallery/first-collage/h-image.png"},
        {id: 6, image: "/gallery/first-collage/w-image.png"},
    ];

    const imagesDress = [
        {id: 1, image: "/gallery/first-collage/w-image.png"},
        {id: 2, image: "/gallery/first-collage/h-image.png"},
        {id: 3, image: "/gallery/first-collage/h-image.png"},
        {id: 4, image: "/gallery/first-collage/h-image.png"},
        {id: 5, image: "/gallery/first-collage/h-image.png"},
        {id: 6, image: "/gallery/first-collage/w-image.png"},
    ];

    return (
        <>
            <div className="main mt-20 mb-20 xl:mt-36 xl:mb-36 space-y-20">
                <GallerySection
                    id={"nas-tym-v-akci"}
                    title={"Náš tým v akci"}
                    images={imagesWorkers}
                    buttonText={"Načíst další fotografie"}
                />

                <GallerySection
                    id={"nase-kostymy"}
                    title={"Naše kostýmy"}
                    images={imagesDress}
                    buttonText={"Načíst další kostýmy"}
                />
            </div>
        </>
    );
}