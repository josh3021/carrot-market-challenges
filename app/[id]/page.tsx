import { Country } from "@/components/utils/Country";
import { Industries } from "@/components/utils/Industries";
import { NetWorth } from "@/components/utils/NetWorth";
import { BILLIONS_API_URL } from "@/constants/api";
import { Metadata } from "next";
import Image from "next/image";

interface FinancialAsset {
  exchange?: string;
  ticker?: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice?: number;
  exerciseOptionPrice?: number;
}

interface BillionaireDetails {
  id: string;
  state?: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets?: FinancialAsset[];
  thumbnail?: string;
  squareImage?: string;
  bio: string[];
  about?: string[];
  netWorth: number;
}

interface Params {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const detailsResponse = await fetch(`${BILLIONS_API_URL}/person/${id}`);
  const details = await (detailsResponse.json() as Promise<BillionaireDetails>);
  return {
    title: `Billions about ${details.name}`,
  };
}

export default async function BillionaireDetails({ params }: Params) {
  const { id } = await params;
  const detailsResponse = await fetch(`${BILLIONS_API_URL}/person/${id}`);
  const details = await (detailsResponse.json() as Promise<BillionaireDetails>);
  return (
    <div className="p-16">
      <div className="flex gap-8">
        <div className="relative w-96 aspect-square rounded-2xl overflow-hidden ring-2 ring-offset-2">
          {details.squareImage && !details.squareImage.includes("undefined") ? (
            <Image
              src={details.squareImage}
              className="object-cover"
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
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl text-white line-clamp-2">
            {details.name}
          </h2>
          <NetWorth netWorth={details.netWorth} />
          <Country
            country={details.country}
            state={details.state}
            city={details.city}
          />
          <Industries industries={details.industries} />
          {details.about && (
            <div className="p-2">
              <p className="whitespace-pre-wrap ">{details.about.join("\n")}</p>
            </div>
          )}
          <div className="bg-zinc-800 rounded-lg p-2">
            <h2 className="font-bold">About {details.name}</h2>
            <p className="whitespace-pre-wrap text-sm">
              {details.bio.join("\n")}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {details.financialAssets?.map((asset, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors"
          >
            <div className="w-full mb-3">
              <div>
                <h3 className="font-semibold text-white truncate">
                  {asset.companyName}
                </h3>
                <div className="flex items-center gap-1 justify-between">
                  {asset.ticker && (
                    <p className="text-sm text-zinc-400">({asset.ticker})</p>
                  )}
                  <div className="flex gap-1">
                    {asset.exchange && (
                      <p className="text-sm text-zinc-500">{asset.exchange}</p>
                    )}
                    <p className="text-sm text-zinc-500">
                      {asset.currencyCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              {asset.currentPrice && (
                <div className="flex justify-between">
                  <span className="text-sm text-zinc-400">Current Price</span>
                  <span className="text-sm font-medium text-white">
                    ${asset.currentPrice.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-sm text-zinc-400">Share Price</span>
                <span className="text-sm font-medium text-white">
                  ${asset.sharePrice.toLocaleString()}
                </span>
              </div>
              {asset.exerciseOptionPrice && (
                <div className="flex justify-between">
                  <span className="text-sm text-zinc-400">Exercise Price</span>
                  <span className="text-sm font-medium text-orange-400">
                    ${asset.exerciseOptionPrice.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            {/* 보유 수량 */}
            <div className="border-t border-zinc-700 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-400">Shares</span>
                <span className="text-lg font-bold text-blue-400">
                  {asset.numberOfShares.toLocaleString("ko-KR")}
                </span>
              </div>
              {asset.exchangeRate !== 1 && (
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-zinc-500">Exchange Rate</span>
                  <span className="text-xs text-zinc-500">
                    {asset.exchangeRate}
                  </span>
                </div>
              )}
            </div>

            {/* 총 가치 계산 */}
            <div className="mt-3 p-2 bg-zinc-800 rounded">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-zinc-300">
                  Total Value
                </span>
                <span className="text-sm font-bold text-green-400">
                  $
                  {(
                    (asset.currentPrice ?? asset.sharePrice) *
                    asset.numberOfShares *
                    asset.exchangeRate
                  ).toLocaleString()}
                </span>
              </div>
            </div>

            {/* 옵션 이익 (있는 경우) */}
            {asset.currentPrice && asset.exerciseOptionPrice && (
              <div className="mt-2 p-2 bg-orange-900/20 rounded border border-orange-800/30">
                <div className="flex justify-between">
                  <span className="text-xs text-orange-300">Option Profit</span>
                  <span className="text-xs font-bold text-orange-300">
                    $
                    {(
                      (asset.currentPrice - asset.exerciseOptionPrice) *
                      asset.numberOfShares
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
