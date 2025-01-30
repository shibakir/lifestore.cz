import Social from "@/common/Social";
import Button from "@/common/Buttons/Button";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FooterForm} from "@/common/FooterForm";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-background-tertiary pt-20 pb-20 rounded-tl-[5vw] rounded-tr-[5vw]">
            <div className="w-10/12 mx-auto flex flex-row">
                <div className="w-1/3">
                    <div className="min-h-full grid grid-cols-1 grid-rows-3 gap-4">
                        <div>
                            <Social
                                title={"Začněte plánovat svou akci s námi!"}
                                text={"Neváhejte nás kontaktovat! Pomůžeme vám s plánováním a" +
                                    " zajištěním profesionálního týmu pro vaši akci. Vyplněním" +
                                    " formuláře se dostanete o krok blíže k úspěchu."}
                            />
                        </div>
                        <div>
                            <div className="space-y-4">
                                <div className="row-auto space-x-5">
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
                                <div className="row-auto space-x-5">
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
                        <div className="flex items-end">
                            <div className="flex flex-row items-end justify-between w-full">
                                <Link href="/">
                                    <Image src="/globe.svg" alt="Logo" width={100} height={100}/>
                                </Link>

                                <p className="text-text-primary">
                                    LifeStore s.r.o. <br/>
                                    IČO: 24123820 <br/>
                                    Jana Přibíka 953/15, 190 00 Praha <br/>
                                    Všechna práva vyhrazena © 2025 <br/>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <FooterForm/>
                </div>
            </div>
        </footer>
    );
}