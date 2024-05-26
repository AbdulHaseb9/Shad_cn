import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-24 py-12">
      <h1 className="font-bold text-xl tracking-widest">ShadCN Components</h1>
      <div className="h-full my-7">
        <ul className="text-center space-y-4 text-lg font-semibold">
          <li>
            <Link href={"accordian"}>Accordian</Link>
          </li>
          <li>
            <Link href={"alertdialog"}>Alert Dialog</Link>
          </li>
          <li>
            <Link href={"carousel"}>Carousel</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
