import { Russo_One } from "next/font/google";

const font = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className="flex items-center relative">
      <span
        className={`${font.className} bg-[--background] tracking-widest text-2xl z-10`}
      >
        LUMON
      </span>
      <div
        style={{ borderRadius: "100%" }}
        className="absolute rounded-full border-2 border-[--foreground] h-20 w-36 -left-5"
      ></div>
      <div
        style={{ borderRadius: "100%" }}
        className="absolute rounded-full border-2 border-[--foreground] h-20 w-24 left-1"
      ></div>
      <div
        style={{ borderRadius: "100%" }}
        className="absolute rounded-full border-2 border-[--foreground] h-20 w-16 left-5"
      ></div>
    </div>
  );
}
