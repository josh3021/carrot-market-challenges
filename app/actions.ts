"use server";

export async function handleForm(_: any, formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const isSuccess = password === "12345";

  return {
    email: { errors: null, value: isSuccess ? "" : email },
    username: { errors: null, value: isSuccess ? "" : username },
    password: {
      errors: isSuccess ? null : ["Password Incorrect"],
      value: "",
    },
    success: isSuccess,
  };
}
