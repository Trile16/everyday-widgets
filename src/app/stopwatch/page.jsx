"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!start) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl h-5/6 flex flex-col justify-between items-center">
      <h1 className="text-3xl/8 p-8 text-center">Stopwatch</h1>
      <div className="bg-gray w-5/6 h-1/2 rounded-xl flex flex-col justify-center items-center">
        <div className="text-5xl">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div>
          <button className="m-4" onClick={() => setStart(true)}>
            Start
          </button>
          <button className="m-4" onClick={() => setStart(false)}>
            Stop
          </button>
          <button className="m-4" onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
}
