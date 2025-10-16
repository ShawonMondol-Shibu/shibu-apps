"use client";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { appContext } from "@/context/AppContextProvider";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";

export interface dataType {
  id: number;
  image: string;
  title: string;
  companyName: string;
  description: string;
  size: number;
  reviews: number;
  ratingAvg: number;
  downloads: number;
  ratings: [];
}

export default function Details({ data }: any) {
  const { store, installed, handleInstall }: any = useContext(appContext);
  console.log(data);
  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  }: dataType = data;

  const isInstalld = installed.find((item: { id: number }) => item.id == id);
  console.log(installed);
  return (
    <main>
      {" "}
      <section className="flex items-center gap-10">
        <Image
          src={image || "/assets/demo-app (1).webp"}
          alt={title}
          width={320}
          height={320}
          className="rounded-lg shadow-md"
        />
        <div className="space-y-5 text-lg">
          <CardTitle className="text-3xl">App name: {title}</CardTitle>
          <p className="text-sm font-semibold">Developed by {companyName}</p>
          <hr />
          <p className="flex items-center gap-5 justify-between">
            <span>
              <span className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {Math.floor(ratingAvg) > i ? (
                      <Star fill="gold" strokeWidth={0.2} size={30} />
                    ) : (
                      <Star strokeWidth={0.2} size={30} />
                    )}
                  </span>
                ))}
              </span>
              {/* <Image src={"/assets/icon-ratings.png"} alt="" width={30} height={30} /> */}
              <small>Average Ratings</small>
              <br />
              <strong className="text-2xl font-black">{ratingAvg}</strong>
            </span>

            <span>
              <Image
                src={"/assets/icon-review.png"}
                alt=""
                width={40}
                height={40}
              />
              <small>{"Total Reviews "}</small>
              <br />
              <strong className="font-black text-2xl">
                {reviews < 1000
                  ? reviews
                  : `${(reviews / 1000).toPrecision(3)}K`}
              </strong>
            </span>

            <span>
              <Image
                src={"/assets/icon-downloads.png"}
                alt=""
                width={40}
                height={40}
              />
              <small>Downloads</small>
              <br />
              <strong className="text-2xl font-black">
                {downloads < 1000
                  ? downloads
                  : `${(downloads / 1000).toPrecision(3)}K`}
              </strong>
            </span>
          </p>

          <Button
            variant={isInstalld ? "outline" : "default"}
            onClick={() =>
              handleInstall(id, title, image, downloads, ratingAvg, size)
            }
            disabled={isInstalld}
            className={cn("font-semibold", isInstalld ? "bg-none" : "")}
          >
            {isInstalld ? "App Installed" : `Install Now (${size}MB)`}
          </Button>
          <p>{description}</p>
        </div>
      </section>
      <div className="mt-10">
        <p>Feedback</p>
        {ratings.map((rate: { name: string; count: number }) => (
          <div key={rate.name} className="space-x-2">
            <span>{rate.name}</span>
            <span>total {rate.count}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
