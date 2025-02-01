import Social from "@/common/Social";
import Button from "@/common/Buttons/Button";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FooterForm} from "@/common/FooterForm";
import Image from "next/image";
import Link from "next/link";
import Title from "@/common/Title";
import Text from "@/common/Text";

export default function Footer() {

    return (
        <footer className="bg-background-tertiary pt-10 lg:pt-20 pb-10 lg:pb-20 rounded-tl-[5vw] rounded-tr-[5vw]">
            <div className="main flex flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <div className="min-h-full grid grid-cols-1 grid-rows-3 gap-4">
                        <div>
                            <Title
                                className="mb-3 text-text-primary"
                                title={"Začněte plánovat svou akci s námi!"}
                            />
                            <Text
                                className="text-text-primary"
                                text={"Neváhejte nás kontaktovat! Pomůžeme vám s plánováním a" +
                                " zajištěním profesionálního týmu pro vaši akci. Vyplněním" +
                                " formuláře se dostanete o krok blíže k úspěchu."}
                            />
                        </div>
                        <div>
                            <div className="space-y-2 lg:space-y-4">
                                <div className="space-y-2 lg:space-y-0 lg:space-x-5">
                                    <Button
                                        text="+420 773 530 000"
                                        link="tel:+420773530000"
                                        className="bg-button-button-2 hover:bg-button-button-3 text-text-secondary p-5"
                                    />
                                    <Button
                                        text="marika.pusova@lifestore.cz"
                                        link="mailto:marika.pusova@lifestore.cz"
                                        className="bg-button-button-2 hover:bg-button-button-3 text-text-secondary p-5"
                                    />
                                </div>
                                <div className="space-x-2 lg:space-x-5">
                                    <Button
                                        text="lifestore.cz"
                                        link="https://www.lifestore.cz/"
                                        className="bg-button-button-3 hover:bg-button-button-3 text-text-primary p-5"
                                        icon={faInstagram}
                                    />
                                    <Button
                                        text="lifestore"
                                        link="https://www.lifestore.cz/"
                                        className="bg-button-button-3 hover:bg-button-button-3 text-text-primary p-5"
                                        icon={faFacebookF}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center lg:items-end">
                            <div className="mt-5 lg:mt-0 flex flex-row items-end justify-between w-full">
                                <Link href="/">
                                    <Image src="/globe.svg" alt="Logo" width={100} height={100}/>
                                </Link>
                                <Text
                                    className="text-text-primary text-[10px] lg:text-sm"
                                    text={
                                        "LifeStore s.r.o.\n"
                                        +"IČO: 24123820\n"
                                        +"Jana Přibíka 953/15, 190 00 Praha\n"
                                        +"Všechna práva vyhrazena © 2025"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/3"></div>
                <div className="mb-10 lg:mb-0 w-full lg:w-1/3">
                    <FooterForm/>
                </div>
            </div>
        </footer>
    );
}