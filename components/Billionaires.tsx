import { BILLIONS_API_URL } from "@/constants/api";
import Image from "next/image";
import Link from "next/link";
import { Industries } from "./utils/Industries";
import { NetWorth } from "./utils/NetWorth";

interface Billionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export async function Billionaires() {
  const billionairesResponse = await fetch(BILLIONS_API_URL);
  const billionaires = await (billionairesResponse.json() as Promise<
    Billionaire[]
  >);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {billionaires.map((billionaire) => (
        <Link
          href={billionaire.id}
          key={billionaire.id}
          className="bg-zinc-800 overflow-hidden rounded-lg hover:bg-zinc-700 hover:scale-105 transition-all duration-300 group"
        >
          <div className="relative w-full aspect-square">
            {billionaire.squareImage &&
            !billionaire.squareImage.includes("undefined") ? (
              <Image
                src={billionaire.squareImage}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                alt={billionaire.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            ) : (
              <div className="w-full h-full bg-zinc-300 rounded-lg flex items-center justify-center">
                <span className="text-zinc-500 text-sm">No Image</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl text-white line-clamp-2">
              {billionaire.name}
            </h2>
            <NetWorth netWorth={billionaire.netWorth} />
            <Industries industries={billionaire.industries} />
          </div>
        </Link>
      ))}
    </div>
  );
}
