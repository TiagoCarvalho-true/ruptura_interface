import Logo from "./Logo";

export default function Header(props: { className?: string }) {
  return (
    <header
      className={`border-2 border-[--foreground] ${props.className ?? ""}`}
    >
      <div className="flex justify-between items-center p-2">
        <p className="text-3xl">Dranesville</p>
        <div className="flex items-center gap-10">
          <p
            style={{ WebkitTextStroke: "1px var(--foreground)" }}
            className="text-transparent text-3xl"
          >
            44% Complete
          </p>
          <Logo />
        </div>
      </div>
    </header>
  );
}
