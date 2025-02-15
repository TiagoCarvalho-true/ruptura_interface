"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

export interface ValueProps {
  number: number;
  moveEffect?: 1 | 2 | 3 | 4;
  x: number;
  y: number;
}

function Value(props: ValueProps) {
  const effect = ["floating-xl", "floating-xr", "floating-yb", "floating-yt"];

  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;

    const { x, y } = props;
    const { left, top } = ref.current.getBoundingClientRect();

    const distance = Math.sqrt((x - left) ** 2 + (y - top) ** 2);
    const scale = 1 + Math.min(1, 100 / distance) * 1.4;

    setScale(scale);
  }, [props.x, props.y]);

  return (
    <div
      ref={ref}
      style={{ scale: scale ?? 1 }}
      className={`
        flex justify-center items-center w-16 h-16 text-3xl
        ${effect[props.moveEffect ?? 0] ?? ""}
      `}
    >
      {props.number}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Value), {
  ssr: false,
});
