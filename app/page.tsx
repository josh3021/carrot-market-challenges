import { Billionaires } from "@/components/Billionaires";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billions API",
  description: "Billions API With Nomad Coders Challenge",
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Billions API</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-starte">
        <div>
          <Billionaires />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
