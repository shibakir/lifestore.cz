import Image from "next/image";

export default function Logo({src, alt}) {

    return (
        <div className="flex justify-center w-full lg:w-11/12 ">
            <Image
                src={src}
                alt={alt}
                width={280}
                height={100}
            />
        </div>
    );
}