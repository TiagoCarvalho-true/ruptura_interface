export interface RuleProps {
  double?: boolean;
  className?: string;
}

export default function Rule(props: RuleProps) {
  return (
    <div className={`flex flex-col gap-1 ${props.className}`}>
      <div className="border-t-2 border-[--foreground]"></div>
      {props.double && <div className="border-t-2 border-[--foreground]"></div>}
    </div>
  );
}
