import Image from "next/image";
import LogoList from "@/common/LogoList/LogoList";
import DoubleImageSection from "@/common/Sections/DoubleImageSection";
import TextSectionWithButton from "@/common/Sections/TextSectionWithButton";
import HeroSectionHomepage from "@/common/Sections/HeroSectionHomepage";

export const metadata = {
    title: "Lifestore s.r.o",
    description: "Lifestore s.r.o. Pomáháme vaší společnosti vyniknout mezi konkurencí.Spolehlivost a kvalita je naším standardem!",
};

export default function Homepage() {
  return (
      <>
        <HeroSectionHomepage />

        <div className="mt-10 mb-10 lg:mt-20 lg:mb-20">
          <div className="main flex flex-col lg:flex-row lg:space-x-10">
            <div className="w-full lg:w-1/2 2xl:w-8/12">
              <Image
                  src="/homepage-2.png"
                  alt="workers"
                  width={800}
                  height={800}
                  unoptimized
              />
            </div>
            <div className="w-full lg:w-1/2 lg:ml-10 2xl:w-4/12 flex flex-col lg:justify-end lg:items-start">
                <TextSectionWithButton
                    className="mt-5"
                    title={"Poptáváte hostesky? To je naše parketa!"}
                    buttonText={"Kontaktujte nás nyní"}
                    link={"#formular-pro-klienty"}
                    text={"Od roku 2011 jsme zajistili tisíce hostesek a promotérů." +
                        " Náš profesionální tým připravíme na akci dle vašich specifických" +
                        " požadavků – to zahrnuje oblečení, líčení a účes. Předností" +
                        " Lifestore je flexibilita a zajištění personálu na poslední chvíli." +
                        " Nabízíme spolehlivost, kvalitu a individuální přístup, protože" +
                        " váš úspěch je pro nás vždy na prvním místě."}
                />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 lg:mt-20 lg:mb-20 flex flex-row">
          <div className="main rounded-[8vw] lg:rounded-[2vw] bg-background-secondary">
            <LogoList/>
          </div>
        </div>

        <DoubleImageSection
            className="xl:mb-36"
            title="Brigádníci pro restaurace, bary a hotely"
            text="Potřebujete rychle spolehlivý personál? Zajistíme snídaňové hostesky, debaras, obsluhu i recepci – zvládneme to i na poslední chvíli. Vyřešíme výpadky ve vašem týmu, seženeme kvalitní náhradu a ušetříme vám čas se zaškolováním. Zaměřte se na svůj byznys, my zajistíme zbytek."
            buttonText="Zjistit více o našich službách"
            link={"#formular-pro-klienty"}
        />
        <DoubleImageSection
            reverse
            className="mb-20 xl:mb-36"
            title="Brigáda, která vás bude bavit"
            text="Připojte se k Lifestore a otevřete si dveře do světa prestižních eventů! Nabízíme flexibilní pracovní směny, zaškolení, a na většině akcí poskytujeme i stravování. Staňte se součástí týmu, který realizuje nejvýznamnější akce v České republice a vyjíždí i na mezinárodní eventy. Začněte svou kariéru v event managementu s Lifestore ještě dnes!"
            buttonText="Přidejte se k našemu týmu"
            link={"brigadnici/#formular-pro-hostesky"}
        />
      </>
  );
}
