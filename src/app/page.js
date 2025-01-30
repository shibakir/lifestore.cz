import BulletList from "@/common/BulletList/BulletList";
import Image from "next/image";
import Button from "@/common/Buttons/Button";
import ActionButton from "@/common/Buttons/ActionButton";

export default function Homepage() {
  return (
      <>
        <div className="h-[40vh] bg-background-primary pt-20 pb-20 rounded-bl-[5vw] rounded-br-[5vw]
                        mb-[-8vh] relative z-10">
          <div className="w-10/12 mx-auto flex flex-row">
            <div className="w-1/2"></div>
          </div>
        </div>

        <div className="bg-background-tertiary pt-20 pb-20 relative z-0 mt-8">
          <div className="w-10/12 mx-auto flex flex-row">
            <BulletList/>
          </div>
        </div>

        <div className="mt-10 mb-10 lg:mt-20 lg:mb-20 flex flex-row">
          <div className="w-10/12 mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 2xl:w-8/12">
              <Image
                  src="/homepage-2.png"
                  alt="workers"
                  width={800}
                  height={800}
                  unoptimized
              />
            </div>
            <div className="w-full lg:w-1/2 lg:ml-10 2xl:w-4/12 flex flex-col justify-end items-start">
              <h2 className="mt-5 lg:mt-0 text-xl font-bold">Poptáváte hostesky? To je naše parketa!</h2>
              <p className="mt-3 mb-10">
                Od roku 2011 jsme zajistili tisíce hostesek a promotérů.<br/>
                Náš profesionální tým připravíme na akci dle vašich specifických<br/>
                požadavků – to zahrnuje oblečení, líčení a účes. Předností<br/>
                Lifestore je flexibilita a zajištění personálu na poslední chvíli.<br/>
                Nabízíme spolehlivost, kvalitu a individuální přístup, protože<br/>
                váš úspěch je pro nás vždy na prvním místě.
              </p>
              <div>
                <ActionButton text={"Kontaktujte nás nyní"} link={""}/>
              </div>
            </div>


          </div>
        </div>
      </>
  );
}
