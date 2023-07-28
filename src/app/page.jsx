import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center p-16">
      <div className="bg-gray rounded-xl p-8">
        <h1 className="text-3xl/8 p-8 bg-indigo-500">Everyday Widgets!</h1>
        <div>
          <Link
            href="/weather"
            className="flex flex-col items-center bg-blue w-fit rounded-xl"
          >
            <Image
              src="/clouds.png"
              width={125}
              height={125}
              alt="Picture of the author"
            />
            <h2 className="text-xl/8">Weather</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
