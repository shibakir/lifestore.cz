import Button from "@/common/Buttons/Button";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FooterForm} from "@/common/FooterForm";
import Image from "next/image";
import Link from "next/link";
import Title from "@/common/Title";
import Text from "@/common/Text";

export default function Footer({pathname}) {



    return (
        <footer
            className={`${pathname === "/klienti" ? "bg-background-secondary" : ""}`}
        >
            <div className="pt-10 lg:pt-20 pb-10 lg:pb-20 rounded-tl-[5vw] rounded-tr-[5vw] bg-background-tertiary">
                <div className="main flex flex-col-reverse lg:flex-row">
                    <div className="w-full xl:w-1/3">
                        <div className="min-h-full grid grid-cols-1 lg:grid-rows-3 gap-4">
                            <div className="w-full lg:w-3/4">
                                <Title
                                    className="xl:min-w-[700px] mb-3 text-text-primary hidden lg:block"
                                    title={"Začněte plánovat svou akci s námi!"}
                                />
                                <Text
                                    className="xl:min-w-500px] text-text-primary"
                                    text={"Neváhejte nás kontaktovat! Pomůžeme vám s plánováním a" +
                                    " zajištěním profesionálního týmu pro vaši akci. Vyplněním" +
                                    " formuláře se dostanete o krok blíže k úspěchu."}
                                />
                            </div>
                            <div>
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <Button
                                            text="+420 773 530 000"
                                            link="tel:+420773530000"
                                            className="mr-5 bg-button-button-2 hover:bg-button-button-3 text-text-secondary text-base xl:text-lg p-6"
                                        />
                                        <Button
                                            text="marika.pusova@lifestore.cz"
                                            link="mailto:marika.pusova@lifestore.cz"
                                            className="bg-button-button-2 hover:bg-button-button-3 text-text-secondary text-base xl:text-lg p-6"
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            text="lifestore.cz"
                                            link="https://www.lifestore.cz/"
                                            className="mr-5 mb-2 bg-button-button-3 hover:bg-button-button-3 text-text-primary text-base xl:text-lg p-6"
                                            icon={faInstagram}
                                        />
                                        <Button
                                            text="Lifestore"
                                            link="https://www.lifestore.cz/"
                                            className="bg-button-button-3 hover:bg-button-button-3 text-text-primary text-base xl:text-lg p-6"
                                            icon={faFacebookF}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap md:items-start lg:items-center 2xl:items-end">
                                <div className="mt-5 lg:mt-0 flex flex-row items-end justify-between w-full">
                                    <Link href="/">
                                        <Image src="/globe.svg" alt="Logo" width={100} height={100}/>
                                    </Link>
                                    <Text
                                        className="text-text-primary tracking-tight text-[10px] lg:text-sm"
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
                    <div className="hidden lg:block lg:w-1/3"></div>
                    <div className="mb-10 lg:mb-0 w-full xl:w-1/3 flex flex-col items-center">
                        <FooterForm/>
                    </div>
                </div>
            </div>
        </footer>
    );
}