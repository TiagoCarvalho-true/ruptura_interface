export interface BoxProps {
  number: number;
  percentage: number;
  open?: boolean;
  onClick?: () => void;
}

export default function Box(props: BoxProps) {
  return (
    <div
      className="flex flex-col gap-2 flex-1 relative select-none"
      onClick={props.onClick}
    >
      {props.open && (
        <>
          <div className="absolute -top-3 h-3 border-2 border-[--foreground]"></div>
          <div className="absolute -top-3 h-3 border-2 border-[--foreground] right-0"></div>
          <div className="absolute -top-3 h-1 border-2 border-[--foreground] w-full"></div>
          <div className="absolute top-0 h-1 border-2 border-[--foreground] w-full"></div>

          <div className="absolute -top-[7.4rem] -left-11 h-32 border-2 border-[--foreground] -rotate-45"></div>
          <div className="absolute -top-[6.7rem] -left-11 h-32 border-2 border-[--foreground] -rotate-45"></div>

          <div className="absolute -top-[7.4rem] -right-11 h-32 border-2 border-[--foreground] rotate-45"></div>
          <div className="absolute -top-[6.7rem] -right-11 h-32 border-2 border-[--foreground] rotate-45"></div>
        </>
      )}
      <div className="flex justify-center items-center border-2 border-[--foreground] text-2xl py-1">
        {props.number.toString().padStart(2, "0")}
      </div>
      <div className="flex items-center border-2 border-[--foreground] text-2xl">
        <div
          className="bg-[--foreground] text-[--background] h-full"
          style={{ width: `${props.percentage}%` }}
        >
          {props.percentage >= 20 && <span>{props.percentage}%</span>}
        </div>
        {props.percentage < 20 && (
          <span className="pl-2">{props.percentage}%</span>
        )}
      </div>
    </div>
  );
}
