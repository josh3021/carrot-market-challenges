"use client";

import { FormButton } from "@/components/form-button";
import { FormInput } from "@/components/form-Input";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";
import { handleForm } from "./actions";

export default function Home() {
  const [state, formAction] = useActionState(handleForm, null);
  return (
    <main className="p-32">
      <form className="flex flex-col gap-4">
        <FormInput
          icon={<EnvelopeIcon className="form-icon" />}
          type="email"
          name="email"
          placeholder="Email"
          errors={state?.email.errors}
          defaultValue={state?.email.value}
        />
        <FormInput
          icon={<UserIcon className="form-icon" />}
          name="username"
          placeholder="Username"
          errors={state?.username.errors}
          defaultValue={state?.username.value}
        />
        <FormInput
          icon={<KeyIcon className="form-icon" />}
          type="password"
          name="password"
          placeholder="Password"
          errors={state?.password.errors}
          defaultValue={state?.password.value}
        />
        <FormButton formAction={formAction} />
      </form>
      {state?.success && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          로그인 성공!
        </div>
      )}
    </main>
  );
}
