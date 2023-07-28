import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl h-5/6 flex flex-col justify-between items-center">
      <h1 className="text-3xl/8 p-8 text-center">Everyday Widgets!</h1>
      <div className="flex flex-wrap justify-center items-center w-3/4">
        <Link
          href="/weather"
          className="flex flex-col items-center bg-blue w-fit rounded-xl m-4 w-1/3"
        >
          <Image src="/clouds.png" width={125} height={125} alt="weather" />
          <h2 className="text-xl/8">Weather</h2>
        </Link>
        <Link
          href="/calculator"
          className="flex flex-col items-center bg-blue w-fit rounded-xl m-4 w-1/3"
        >
          <Image
            src="/calculator.png"
            width={125}
            height={125}
            alt="calculator"
          />
          <h2 className="text-xl/8">Calculator</h2>
        </Link>
        <Link
          href="/stopwatch"
          className="flex flex-col items-center bg-blue w-fit rounded-xl m-4 w-1/3"
        >
          <Image
            src="/stopwatch.png"
            width={125}
            height={125}
            alt="stopwatch"
            className="p-2"
          />
          <h2 className="text-xl/8">Stopwatch</h2>
        </Link>
        <Link
          href="/clock"
          className="flex flex-col items-center bg-blue w-fit rounded-xl m-4 w-1/3"
        >
          <Image
            src="/clock.png"
            width={125}
            height={125}
            alt="clock"
            className="p-2"
          />
          <h2 className="text-xl/8">Clock</h2>
        </Link>
      </div>
    </div>
  );
}
