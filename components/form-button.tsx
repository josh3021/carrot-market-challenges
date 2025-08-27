"use client";

import { useFormStatus } from "react-dom";

export function FormButton({
  formAction,
}: {
  formAction: (payload: FormData) => void;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      formAction={formAction}
      className="bg-zinc-300 rounded-full py-3 font-bold text-zinc-600 cursor-pointer transition-all hover:bg-zinc-400 active:scale-105"
    >
      {pending ? "Loading" : "Log in"}
    </button>
  );
}
