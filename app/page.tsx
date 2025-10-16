"use client";
import Image from "next/image";
import DB from "@/db/db.json";
import AppsCard from "@/components/layout/AppsCard";
export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-center text-center ">
        <div className="space-y-5 p-5">
          <h1 className="text-5xl font-extrabold">
            We Build <br /> <span className="text-purple-500">Productive</span>
            Apps
          </h1>
          <Image
            src={"/assets/hero.png"}
            alt="hero banner image"
            width={1000}
            height={1000}
          />
        </div>
      </header>
      <section className="flex flex-wrap gap-5 items-center justify-center min-h-screen py-2">
        {DB.slice(0, 8).map((apps) => (
          <AppsCard key={apps.id} apps={apps} />
        ))}
      </section>
    </main>
  );
}
