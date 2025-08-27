import { JSX } from "react";

interface FormInputProps {
  type?: string;
  placeholder: string;
  required?: boolean;
  errors?: string[] | null;
  name: string;
  icon: JSX.Element;
  defaultValue?: string;
}
export function FormInput({
  type = "text",
  placeholder,
  required = true,
  errors,
  name,
  icon,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="flex items-center gap-2 ring-2 ring-zinc-400 rounded-full px-4 py-1 focus-within:ring-orange-400 cursor-text"
      >
        {icon}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className="bg-transparent flex-1 h-10 focus:outline-none transition border-none"
        />
      </label>
      {errors?.map((error, index) => (
        <span
          key={index}
          className="text-red-500 font-medium text-sm mt-1 block"
        >
          {error}
        </span>
      ))}
    </div>
  );
}
