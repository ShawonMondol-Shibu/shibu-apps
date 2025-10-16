"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { appContext } from "@/context/AppContextProvider";
import Image from "next/image";
import React, { useContext } from "react";

export default function Page() {
  const { installed }: any = useContext(appContext);
  if (!installed || installed.length == 0) {
    return (
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className=" text-center grid place-items-center gap-10 animate-bounce">
          <Image
            src={"/assets/App-Error.png"}
            alt="App-error"
            width={350}
            height={350}
          />
          <hgroup className="space-y-4">
            <h2 className="text-2xl font-bold">OPPS!! APP NOT FOUND</h2>
            <p>
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Button
              variant={"default"}
              onClick={() => history.back()}
              className="cursor-pointer"
            >
              Go Back!
            </Button>
          </hgroup>
        </div>
      </div>
    );
  }
  return (
    <main className="container m-auto p-5">
      <hgroup className="text-center space-y-3 py-10">
        <h1 className="text-4xl font-semibold">Your Installed Apps</h1>
        <p className="text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </hgroup>

      <div>
        <h2 className="text-2xl font-semibold">
          Total Installed Apps: {installed.length}
        </h2>
      </div>
      <section className="mt-10 space-y-4">
        {installed.map(
          (apps: {
            image: string;
            title: string;
            id: number;
            download: number;
            rating: number;
            size: number;
          }) => {
            const { image, title, id, download, rating, size } = apps;
            return (
              <Card key={id} className="w-full">
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image width={50} height={50} src={image} alt={title} />
                    <hgroup className="space-y-2">
                      <CardTitle>{title}</CardTitle>
                      <p className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-2">
                          <Image
                            src={"/assets/icon-downloads.png"}
                            alt=""
                            width={14}
                            height={40}
                          />
                          {download < 1000
                            ? download
                            : `${(download / 1000).toPrecision(3)}K`}
                        </span>

                        <span className="flex items-center gap-2">
                          <Image
                            src={"/assets/icon-ratings.png"}
                            alt=""
                            width={14}
                            height={40}
                          />

                          {rating}
                        </span>
                        <span>{size}MB</span>
                      </p>
                    </hgroup>
                  </div>

                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="bg-green-500 text-white "
                  >
                    Uninstall
                  </Button>
                </CardContent>
              </Card>
            );
          }
        )}
      </section>
    </main>
  );
}
