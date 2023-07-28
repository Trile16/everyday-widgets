"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl h-[40rem] flex flex-col justify-between items-center">
      <h1 className="text-4xl/8 p-8 text-center">Clock</h1>
      <div className="w-1/2 bg-gray rounded-md h-1/6 flex justify-center items-center text-3xl">
        {currentTime}
      </div>
      <Link
        href="/"
        className="bg-blue rounded-xl w-20 text-center border-2 transition hover:border-green"
      >
        Home
      </Link>
    </div>
  );
}
