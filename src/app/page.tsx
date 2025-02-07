import RoundButton from "@/components/RoundButton";
import Timer from "@/components/Timer";
import Image from "next/image";
import Link from "next/link";
import pitch from "../assets/Football-field.jpg";
import fiveAuber from "../assets/five-auber.jpg";

export default function Home() {
  return (
    <>
    <div className="mt-[200px]">
    <section>
        <div className="h-screen bg-red-300">
          <h1 className="text-8xl">Prochain</h1>
          <h1 className="text-8xl">match dans :</h1>
          <div className="mt-[50px]">
            <Timer targetDate={"2025-02-10T00:00:00"} />
          </div>
        </div>
      </section>

      <section>
        <div className="h-screen bg-blue-300">
          div
        </div>
      </section>  
      <section>
        <div className="h-screen bg-green-300">
          div
        </div>
      </section>
    </div>
      
    </>
  );
}
