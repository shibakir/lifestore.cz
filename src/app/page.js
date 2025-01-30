import BulletList from "@/common/BulletList/BulletList";

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
      </>
  );
}
