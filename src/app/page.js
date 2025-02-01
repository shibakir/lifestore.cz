import BulletList from "@/common/BulletList/BulletList";
import Image from "next/image";
import LogoList from "@/common/LogoList/LogoList";
import DoubleImageSection from "@/common/Sections/DoubleImageSection";
import TextSectionWithButton from "@/common/TextSectionWithButton/TextSectionWithButton";

export default function Homepage() {
  return (
      <>
        <div className="h-[40vh] bg-background-primary pt-20 pb-20 rounded-bl-[5vw] rounded-br-[5vw]
                      mb-[-8vh] relative z-10">
          <div className="main flex flex-row">
            <div className="w-1/2"></div>
          </div>
        </div>

        <div className="bg-background-tertiary pt-20 pb-20 relative z-0 mt-8">
          <div className="main flex flex-row">
            <BulletList/>
          </div>
        </div>

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
                    link={""}
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
          <div className="rounded-[8vw] lg:rounded-[2vw] bg-background-secondary w-10/12 mx-auto">
            <LogoList/>
          </div>
        </div>

        <DoubleImageSection
            className="xl:mb-36"
            title="Brigádníci pro restaurace, bary a hotely"
            text="Potřebujete rychle spolehlivý personál? Zajistíme snídaňové hostesky, debaras, obsluhu i recepci – zvládneme to i na poslední chvíli. Vyřešíme výpadky ve vašem týmu, seženeme kvalitní náhradu a ušetříme vám čas se zaškolováním. Zaměřte se na svůj byznys, my zajistíme zbytek."
            buttonText="Zjistit více o našich službách"
        />
        <DoubleImageSection
            reverse
            className="mb-20 xl:mb-36"
            title="Brigáda, která vás bude bavit"
            text="Připojte se k Lifestore a otevřete si dveře do světa prestižních eventů! Nabízíme flexibilní pracovní směny, zaškolení, a na většině akcí poskytujeme i stravování. Staňte se součástí týmu, který realizuje nejvýznamnější akce v České republice a vyjíždí i na mezinárodní eventy. Začněte svou kariéru v event managementu s Lifestore ještě dnes!"
            buttonText="Přidejte se k našemu týmu"
        />
      </>
  );
}
