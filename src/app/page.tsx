import RoundButton from "@/components/RoundButton";
import Timer from "@/components/Timer";
import Image from "next/image";
import Link from "next/link";
import pitch from "../assets/Football-field.jpg";
import fiveAuber from "../assets/five-auber.jpg";

export default function Home() {
  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center text-3xl gap-2 overflow-auto">
        <h1>Prochain match dans :</h1>
        <div className="flex justify-center items-center w-full px-4">
          <Timer targetDate={"2025-02-10T00:00:00"} />
        </div>
      </div>

      <div className="mx-8 flex gap-[8%] h-full mt-20">
        {/* Premier bloc */}
        <aside className=" w-1/2 h-full flex flex-col items-center gap-5">
          <h1 className="text-2xl text-center mb-4">Voir les compos</h1>
          <Link href="/match/date/compos">
            <div className="overflow-hidden w-full h-[300px]">
              <img src={pitch.src} alt="" className="object-cover w-full h-full" />
            </div>
          </Link>
        </aside>

        {/* Deuxième bloc */}
        <aside className=" w-1/2 h-full flex flex-col items-center gap-5">
          <h1 className="text-2xl text-center mb-4">
            A : UrbanSoccer Porte d'Aubervilliers
          </h1>
          <Link href="/match/date">
            <div className="overflow-hidden w-full h-[300px]">
              <img src={fiveAuber.src} alt="" className="object-cover w-full h-full" />
            </div>
          </Link>
        </aside>
      </div>
    </>
  );
}
