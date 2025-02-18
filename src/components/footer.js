import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {facebookLink, instagramLink, linkedinLink, tiktokLink} from "@/constants/links";
import {FooterFormClients} from "@/common/Forms/FooterFormClients";
import Button from "@/common/Buttons/Button";
import Title from "@/common/Title";
import Text from "@/common/Text";
import Image from "next/image";
import Link from "next/link";
import {FooterFormWorkers} from "@/common/Forms/FooterFormWorkers";

const variants = {
    "clients-light": {
        mainColor: "bg-background-secondary",
        buttonColorFirstGroup: "bg-button-button-1",
        buttonColorSecondGroup: "bg-button-button-4",

        buttonTextColorFirstGroup: "text-text-primary",
        buttonTextColorSecondGroup: "text-text-secondary",

        textColorPrimary: "text-text-secondary",
        textColorSecondary: "text-text-primary",

        buttonTextColor: "text-text-primary"
    },
    "clients-dark": {
        mainColor: "bg-background-tertiary",
        buttonColorFirstGroup: "bg-button-button-2",
        buttonColorSecondGroup: "bg-button-button-3",

        buttonTextColorFirstGroup: "text-text-secondary",
        buttonTextColorSecondGroup: "text-text-primary",

        textColorPrimary: "text-text-primary",
        textColorSecondary: "text-text-secondary",

        buttonTextColor: "text-text-primary"
    },
    "workers": {
        mainColor: "bg-background-secondary",
        buttonColorFirstGroup: "bg-button-button-4",
        buttonColorSecondGroup: "bg-button-button-1",

        buttonTextColorFirstGroup: "text-text-secondary",
        buttonTextColorSecondGroup: "text-text-primary",

        textColorSecondary: "text-text-primary",
        textColorPrimary: "text-text-secondary",

        buttonTextColor: "text-text-primary"
    },
};

export default function Footer({ pathname }) {

    let variant;

    switch (true) {
        case pathname.startsWith("/kontakty") || pathname.startsWith("/klienti"):
            variant = "clients-dark";
            break;
        case pathname.startsWith("/galerie"):
            variant = "clients-light";
            break;
        case pathname.startsWith("/brigadnici"):
            variant = "workers";
            break;
        default:
            variant = "clients-dark";
    }

    const {
        mainColor,  // background
        buttonColorFirstGroup, // odd line buttons
        buttonColorSecondGroup, // even line buttons
        buttonTextColorFirstGroup, // odd line buttons text
        buttonTextColorSecondGroup, // even line buttons text
        textColorPrimary, // title and text and info
    } = variants[variant];

    return (
        <footer
            className={`${pathname === "/klienti" ? "bg-background-secondary" : ""}`}
        >
            <div
                className={`pt-10 lg:pt-20 pb-10 lg:pb-20 rounded-tl-[10vw] rounded-tr-[10vw] ${mainColor}`}
            >
                <div className="main flex flex-col lg:flex-row lg:space-x-5">
                    <div className="w-full lg:w-6/12 2xl:w-1/3 max-w-[520px]">
                        <div className="min-h-full flex flex-col justify-between gap-4">
                            <div>
                                <Title
                                    className={`${textColorPrimary} xl:min-w-[700px] mb-3 text-xl font-normal leading-tight`}
                                    title={"Začněte plánovat svou akci s námi!"}
                                />
                                <Text
                                    className={`${textColorPrimary} font-normal xl:min-w-500px]`}
                                    text={"Neváhejte nás kontaktovat! Pomůžeme vám s plánováním a" +
                                        " zajištěním profesionálního týmu pro vaši akci. Vyplněním" +
                                        " formuláře se dostanete o krok blíže k úspěchu."}
                                />
                            </div>
                            <div>
                                { // Gallery
                                    variant === "clients-light" &&
                                    <div className="space-y-2 xl:space-y-5">
                                        <div className="space-y-2 xl:space-y-5">
                                            <Button
                                                text="info@lifestore.cz"
                                                link="mailto:info@lifestore.cz"
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                variant={"dark"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={instagramLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faInstagram}
                                                variant={"light"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={facebookLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faFacebookF}
                                                variant={"light"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={linkedinLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faLinkedinIn}
                                                variant={"light"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={tiktokLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faTiktok}
                                                variant={"light"}
                                            />
                                        </div>
                                    </div>
                                }
                                { // Homepage or Clients page or Contacts
                                    variant === "clients-dark" &&
                                    <div className="space-y-2 xl:space-y-5">
                                        <div className="space-y-2 xl:space-y-5">
                                            <Button
                                                text="info@lifestore.cz"
                                                link="mailto:info@lifestore.cz"
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                variant={"light-green"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={instagramLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faInstagram}
                                                variant={"mild-green"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={facebookLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faFacebookF}
                                                variant={"mild-green"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={linkedinLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faLinkedinIn}
                                                variant={"mild-green"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={tiktokLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faTiktok}
                                                variant={"mild-green"}
                                            />
                                        </div>
                                    </div>
                                }
                                { // Workers
                                    variant === "workers" &&
                                    <div className="space-y-2 xl:space-y-5">
                                        <div className="space-y-2 xl:space-y-5">
                                            <Button
                                                text="info@lifestore.cz"
                                                link="mailto:info@lifestore.cz"
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                variant={"light"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={instagramLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faInstagram}
                                                variant={"mild-green"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={facebookLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faFacebookF}
                                                variant={"mild-green"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="lifestore.cz"
                                                link={linkedinLink}
                                                className={`mr-2 xl:mr-5 font-normal text-sm xl:text-lg p-6`}
                                                icon={faLinkedinIn}
                                                variant={"mild-green"}
                                            />
                                            <Button
                                                text="Lifestore"
                                                link={tiktokLink}
                                                className={`font-normal text-sm xl:text-lg p-6`}
                                                icon={faTiktok}
                                                variant={"mild-green"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                text="Podepsat smlouvu"
                                                link=""
                                                className={`mr-2 xl:mr-5 mb-2 font-normal text-sm xl:text-lg p-6`}
                                                variant={"light"}
                                            />
                                            <Button
                                                text="Interní dokumenty"
                                                link=""
                                                className={`text-sm font-normal xl:text-lg p-6`}
                                                variant={"light"}
                                            />
                                        </div>
                                    </div>

                                }
                            </div>
                            <div className="hidden lg:flex lg:flex-nowrap md:items-start lg:items-center 2xl:items-end">
                                <div className="mt-5 lg:mt-0 flex flex-row items-end justify-between w-full">
                                    {(variant === "clients-dark") &&
                                        <Link href="/">
                                            <Image src="website/lifestore-logo-white.svg" alt="Logo" width={190}
                                                   height={95}/>
                                        </Link>
                                    }
                                    {(variant === "clients-light" || variant === "workers") &&
                                        <Link href="/">
                                            <Image src="website/lifestore-logo-green.svg" alt="Logo" width={190}
                                                   height={95}/>
                                        </Link>
                                    }
                                    <Text
                                        className={`${textColorPrimary} tracking-tight text-[10px] lg:text-xs 3xl:text-lg 2xl:mb-[-4px]`}
                                        text={
                                            "LifeStore s.r.o.\n"
                                            + "IČO: 24123820\n"
                                            + "Jana Přibíka 953/15, 190 00 Praha\n"
                                            + "Všechna práva vyhrazena © 2025"
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/12 2xl:w-1/3"/>
                    <div className="mb-10 lg:mb-0 w-full lg:w-5/12 2xl:w-1/3 flex flex-col lg:items-center">
                        {
                            (variant === "workers") && // workers
                            <FooterFormWorkers id={"formular-pro-hostesky"} variant={"light"}/>
                        }
                        {
                            (variant === "clients-light") && // gallery
                            <FooterFormClients id={"formular-pro-klienty"} variant={"gallery-light"}/>
                        }
                        {
                            (variant === "clients-dark") && // homepage or clients or contacts
                            <FooterFormClients id={"formular-pro-klienty"} variant={"dark"}/>
                        }
                    </div>
                    <div className=" lg:w-5/12 flex flex-nowrap lg:hidden md:items-start lg:items-center 2xl:items-end">
                        <div className="mt-5 lg:mt-0 flex flex-row place-items-end justify-between w-full">
                            {(variant === "clients-dark") &&
                                <Link href="/">
                                    <Image src="website/lifestore-logo-white.svg" alt="Logo" width={80} height={45}/>
                                </Link>
                            }
                            {(variant === "workers" || variant === "clients-light") &&
                                <Link href="/">
                                    <Image src="website/lifestore-logo-green.svg" alt="Logo" width={80} height={45}/>
                                </Link>
                            }
                            <Text
                                className={`${textColorPrimary} text-[9px] lg:text-sm leading-tight pb-[1px]`}
                                text={
                                    "LifeStore s.r.o. | IČO: 24123820\n"
                                    + "Jana Přibíka 953/15, 190 00 Praha\n"
                                    + "Všechna práva vyhrazena © 2025"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}