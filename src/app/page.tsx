"use client";
import { useRef, useState } from "react";
import Box from "@/components/Box";
import Grid from "@/data/Grid";
import Header from "@/components/Header";
import Rule from "@/components/Rule";
import Value from "@/components/Value";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const gridRef = useRef(Grid.createRandom(320));

  const [open, setOpen] = useState([false, false, false, false, false]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const debouncedX = useDebounce(x, 5);
  const debouncedY = useDebounce(y, 5);

  function openBox(index: number) {
    return () => {
      setOpen((prev) => {
        const next = [...prev];
        next[index] = !next[index];
        return next;
      });
    };
  }

  function handleMouseMove(event: any) {
    setX(event.clientX);
    setY(event.clientY);
  }

  return (
    <div className="flex flex-col gap-4 py-5 h-screen overflow-hidden">
      <Header className="mx-20" />
      <Rule double />
      <div
        className="flex flex-wrap justify-center content-start flex-1 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {gridRef.current?.values.map((value, index) => (
          <Value
            key={index}
            number={value.number}
            moveEffect={value.moveEffect}
            x={debouncedX}
            y={debouncedY}
          />
        ))}
      </div>
      <Rule double />
      <div className="flex gap-5 mx-20">
        <Box number={1} percentage={97} open={open[0]} onClick={openBox(0)} />
        <Box number={2} percentage={15} open={open[1]} onClick={openBox(1)} />
        <Box number={3} percentage={25} open={open[2]} onClick={openBox(2)} />
        <Box number={4} percentage={9} open={open[3]} onClick={openBox(3)} />
        <Box number={5} percentage={77} open={open[4]} onClick={openBox(4)} />
      </div>
      <Rule />
      <div className="flex justify-center gap-3">
        <p className="text-center text-xl">0x 150B4A</p>
        <p className="text-center text-xl">:</p>
        <p className="text-center text-xl">0x 0AEAFC</p>
      </div>
    </div>
  );
}
