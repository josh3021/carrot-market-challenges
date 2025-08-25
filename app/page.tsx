import { Friends } from "@/components/Friends";
import { SimpleTag } from "@/components/SimpleTag";
import { Weather } from "@/components/Weather";

export default function Home() {
  return (
    <main className="grid grid-cols-3 w-full h-full gap-16 p-32">
      <Weather />
      <SimpleTag />
      <Friends />
    </main>
  );
}
