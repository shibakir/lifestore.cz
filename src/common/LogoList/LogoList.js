import Logo from "@/common/LogoList/Logo";

export default function LogoList() {

    const items = [
        { id:1, src: "/next.svg", alt: "Hilton logo" },
        { id:2, src: "/next.svg", alt: "Ferrero Rocher logo" },
        { id:3, src: "/next.svg", alt: "Billa logo" },
        { id:4, src: "/next.svg", alt: "Fine Catering logo" },
    ];

    return (
        <div className="m-10 flex flex-row flex-wrap items-center justify-center">
            {items.map((item, index) => (
                <div className="mt-5 mb-5 w-full md:w-1/2 xl:w-1/4 flex justify-center" key={item.id}>
                    <Logo src={item.src} alt={item.alt}/>
                </div>
            ))}
        </div>
    )
}