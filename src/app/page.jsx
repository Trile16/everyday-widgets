import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center p-16">
      <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl">
        <h1 className="text-3xl/8 p-8 text-center">Everyday Widgets!</h1>
        <div className="flex justify-center items-center">
          <Link
            href="/weather"
            className="flex flex-col items-center bg-blue w-fit rounded-xl m-4"
          >
            <Image src="/clouds.png" width={125} height={125} alt="weather" />
            <h2 className="text-xl/8">Weather</h2>
          </Link>
          <Link
            href="/calculator"
            className="flex flex-col items-center bg-blue w-fit rounded-xl m-4"
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
            className="flex flex-col items-center bg-blue w-fit rounded-xl m-4"
          >
            <Image
              src="/stopwatch.png"
              width={125}
              height={125}
              alt="stopwatch"
            />
            <h2 className="text-xl/8">Stopwatch</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
