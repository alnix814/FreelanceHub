import Header from "@/components/header";
import MainText from "@/components/main-text";
import Silk from "@/blocks/Backgrounds/Silk/Silk";
import Marquee from "@/components/infinity-scroll";
import { whyUsItems } from "@/lib/config";
import * as Icons from "lucide-react";

export default function Home() {

  return (
    <>
      <main>
        <Header />

        <div className="relative w-full min-h-screen flex justify-center items-center">
          <div className="absolute z-0 w-full h-full shadow-2xl" >
            <Silk />
          </div>
          <div className="relative z-10">
            <MainText />
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </div>

        <div className="h-96 bg-[#0a0a0a] border-t border-[#1f2228]">
          <div className="mx-44 mt-24">
            <h1 className="font-medium text-4xl">Почему именно мы?</h1>
            <div className="mt-10 flex gap-5">
              {whyUsItems.map((why, index) => (
                <Marquee
                  key={index}
                  title={why.title}
                  description={why.description}
                  icon={why.icon}
                />
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
