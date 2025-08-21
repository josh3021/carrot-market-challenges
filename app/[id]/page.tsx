import { BILLIONS_API_URL } from "@/constants/api";
import Image from "next/image";

interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

interface BillionaireDetails {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail?: string;
  squareImage?: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export default async function BillionaireDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detailsResponse = await fetch(`${BILLIONS_API_URL}/person/${id}`);
  const details = await (detailsResponse.json() as Promise<BillionaireDetails>);
  return (
    <div>
      <div className="relative w-96 aspect-square">
        {details.squareImage && !details.squareImage.includes("undefined") ? (
          <Image
            src={details.squareImage}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            alt={details.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-zinc-300 rounded-lg flex items-center justify-center">
            <span className="text-zinc-500 text-sm">No Image</span>
          </div>
        )}
      </div>
      <h1>{details.name}</h1>
    </div>
  );
}
