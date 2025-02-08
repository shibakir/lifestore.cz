import Image from "next/image";
import Title from "@/common/Title";
import ActionButton from "@/common/Buttons/ActionButton";
import { metadata } from "@/constants/metadata";
import GalleryCarousel from "@/app/galerie/GalleryCarousel";

export const generateMetadata = () => ({
    title: metadata.gallery.title,
    description: metadata.gallery.description,
});

function ImagesCollageDesktop({ images, buttonText }) {
    return (
        <div className="ml-[-17] w-full">
            <div className="flex flex-row flex-wrap">
                {images.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
                            ${index === 0 || index === 5 ? "w-1/2" : "w-1/4"}
                            ${index === 3 || index === 4 ? "sm:mt-[-15px] md:mt-[-26px] lg:mt-[-36px] xl:mt-[-46px] 2xl:mt-[-56px]" : ""}
                        `}
                    >
                        <Image
                            src={item.image}
                            alt={`Gallery Image ${item.id}`}
                            width={index === 0 || index === 5 ? 652 : 308}
                            height={index === 0 || index === 5 ? 321 : 364}
                            className="w-full h-auto p-5"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4 pr-5">
                <ActionButton text={buttonText} link={""} variant={"dark"} />
            </div>
        </div>
    );
}

function ImagesCollageMobile({images, buttonText}) {
    return (
        <div>
            <div className="flex flex-row flex-wrap">
                {images.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
                                ${index === 0 || index === 5 ? "w-full" : "w-1/2"}
                                ${index === 1 || index === 4 ? "hidden" : ""}
                                ${index === 2 ? "pr-2" : ""}
                                ${index === 3 ? "pl-2" : ""}
                            `}
                    >
                        <Image
                            src={item.image}
                            alt={`Gallery Image ${item.id}`}
                            width={index === 0 || index === 5 ? 652 : 308}
                            height={index === 0 || index === 5 ? 321 : 364}
                            className="w-full h-auto pt-2 pb-2"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <ActionButton
                    text={buttonText}
                    link={""}
                    variant={"dark"}
                    className={"!text-xs !p-3"}
                />
            </div>
        </div>
)
}

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
    const images = [
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
                    images={images}
                    buttonText={"Načíst další fotografie"}
                />

                <GalleryCarousel images={images}/>

                <GallerySection
                    id={"nase-kostymy"}
                    title={"Naše kostýmy"}
                    images={images}
                    buttonText={"Načíst další kostýmy"}
                />
            </div>
        </>
    );
}