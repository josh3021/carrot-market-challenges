import { JSX } from "react";

export function Button({
  size,
  children,
}: {
  size: string;
  children: JSX.Element;
}) {
  return <button className={`${size} button`}>{children}</button>;
}
