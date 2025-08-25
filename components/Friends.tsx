import {
  ChevronLeftIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./Button";

export function Friends() {
  return (
    <div className="container bg-amber-400 relative">
      <div className="grid grid-cols-[auto_1fr_auto] items-center">
        <Button size="size-10 col-span-1">
          <ChevronLeftIcon />
        </Button>
        <h1 className="title text-center">Friends</h1>
        <div className="w-8" />
      </div>
      <div className="flex items-center justify-center gap-1 bg-white border-3 rounded-2xl px-4">
        <input
          className="h-12 w-full outline-none"
          placeholder="Search with love..."
        />
        <button className="size-6 cursor-pointer text-black hover:text-zinc-800">
          <MagnifyingGlassIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Friend name={"Bill Rizer"} team={"Planet Designer"} invited={false} />
        <Friend name={"Genbei Yagy"} team={"Planet Designer"} invited={false} />
        <Friend name={"Lancy Neo"} team={"Rogue Corp."} invited={true} />
        <Friend name={"Bill Rizer #2"} team={"Hard Cops"} invited={false} />
        <Friend name={"Konami"} team={"Xenon Creator"} invited={false} />
      </div>
    </div>
  );
}

function Friend({
  name,
  team,
  invited,
}: {
  name: string;
  team: string;
  invited: boolean;
}) {
  return (
    <div className="w-full rounded-2xl bg-white border-3 flex items-center justify-between p-2">
      <div className="flex gap-2 items-center">
        <div className="rounded-full size-12 bg-rose-400">
          <FaceSmileIcon />
        </div>
        <div className="flex flex-col justify-center items-start">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-xs font-light leading-none">{team}</span>
        </div>
      </div>
      <button
        className={`${
          invited ? "bg-black text-white" : "bg-amber-400 text-black"
        } px-3 my-1 rounded-2xl font-bold border-3 border-black shadow-[0_3px_0_0_#000000]`}
      >
        {invited ? "invited" : "invite"}
      </button>
    </div>
  );
}
