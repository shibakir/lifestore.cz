import Title from "@/common/Title";
import { metadata } from "@/constants/metadata";
import {ImagesCollageDesktop, ImagesCollageMobile} from "@/app/galerie/GalleryCarousel";

export const generateMetadata = () => ({
    title: metadata.gallery.title,
    description: metadata.gallery.description,
});

const imagesWorkers = [
    {id: 1, image: "/gallery/01.jpeg", isVertical: false},
    {id: 2, image: "/gallery/02.jpg", isVertical: true},
    {id: 3, image: "/gallery/03.jpeg", isVertical: true},
    {id: 4, image: "/gallery/04.jpeg", isVertical: true},
    {id: 5, image: "/gallery/05.jpg", isVertical: true},
    {id: 6, image: "/gallery/06.jpeg", isVertical: false},
    {id: 7, image: "/gallery/07.jpg", isVertical: false},
    {id: 8, image: "/gallery/08.jpeg", isVertical: true},
    {id: 9, image: "/gallery/09.jpeg", isVertical: true},
    {id: 10, image: "/gallery/10.jpeg", isVertical: true},
    {id: 11, image: "/gallery/11.jpeg", isVertical: true},
    {id: 12, image: "/gallery/12.JPG", isVertical: false},
    {id: 13, image: "/gallery/13.jpeg", isVertical: false},
    {id: 14, image: "/gallery/14.jpg", isVertical: true},
    {id: 15, image: "/gallery/15.JPG", isVertical: true},
    {id: 16, image: "/gallery/16.JPG", isVertical: true},
    {id: 17, image: "/gallery/17.jpg", isVertical: true},
    {id: 18, image: "/gallery/18.jpeg", isVertical: false},
    {id: 20, image: "/gallery/20.jpeg", isVertical: true},
    {id: 21, image: "/gallery/21.jpeg", isVertical: true},
    {id: 22, image: "/gallery/22.jpeg", isVertical: true},
    {id: 23, image: "/gallery/23.jpeg", isVertical: true},
    {id: 24, image: "/gallery/24.JPG", isVertical: false},
    {id: 25, image: "/gallery/25.jpg", isVertical: true},
    {id: 26, image: "/gallery/26.jpeg", isVertical: true},
    {id: 27, image: "/gallery/27.jpeg", isVertical: true},
    {id: 29, image: "/gallery/29.jpeg", isVertical: true},
    {id: 30, image: "/gallery/30.jpg", isVertical: true},
    {id: 32, image: "/gallery/32.jpg", isVertical: true},
    {id: 33, image: "/gallery/33.jpeg", isVertical: true},
    {id: 35, image: "/gallery/35.jpg", isVertical: true},
    {id: 36, image: "/gallery/36.jpeg", isVertical: true},
    {id: 37, image: "/gallery/37.jpeg", isVertical: true},
    {id: 38, image: "/gallery/38.jpeg", isVertical: true},
    {id: 39, image: "/gallery/39.jpeg", isVertical: true},
    {id: 40, image: "/gallery/40.jpeg", isVertical: true},
    {id: 41, image: "/gallery/41.JPG", isVertical: true},
    {id: 42, image: "/gallery/42.jpeg", isVertical: true},
    {id: 43, image: "/gallery/43.jpeg", isVertical: true},
    {id: 44, image: "/gallery/44.jpeg", isVertical: true},
    {id: 45, image: "/gallery/45.jpg", isVertical: true},
    {id: 46, image: "/gallery/46.jpeg", isVertical: true},
    {id: 47, image: "/gallery/47.jpeg", isVertical: true},
    {id: 49, image: "/gallery/49.jpeg", isVertical: true},
    {id: 50, image: "/gallery/50.jpg", isVertical: true},
    {id: 51, image: "/gallery/51.jpeg", isVertical: true},
];

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

    return (
        <div className="main mt-20 mb-20 xl:mt-36 xl:mb-36 space-y-20">
            <GallerySection
                id={"nas-tym-v-akci"}
                title={"Náš tým v akci"}
                images={imagesWorkers}
                buttonText={"Načíst další fotografie"}
            />
        </div>
    );
}