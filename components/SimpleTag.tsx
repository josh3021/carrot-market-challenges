import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";

export function SimpleTag() {
  return (
    <div className="container bg-white relative">
      <Button size="size-12 absolute">
        <XMarkIcon />
      </Button>
      <h1 className="text-zinc-600 font-bold text-center">SIMPLE TAG</h1>
      <h1 className="title">Work with Best Designers</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-amber-400 aspect-square rounded-xl border-3 flex justify-center items-center">
          <PhotoIcon className="size-16 text-white" />
        </div>
        <div className="bg-cyan-500 aspect-square rounded-xl border-3 flex justify-center items-center">
          <PhotoIcon className="size-16 text-white" />
        </div>
        <div className="bg-pink-400 aspect-square rounded-xl border-3 flex justify-center items-center">
          <PhotoIcon className="size-16 text-white" />
        </div>
        <div className="bg-rose-400 aspect-square rounded-xl border-3 flex justify-center items-center">
          <PhotoIcon className="size-16 text-white" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="block bg-indigo-600 w-full py-3 rounded-xl text-white font-bold text-xl">
          Let&apos; get it done
        </button>
      </div>
    </div>
  );
}
