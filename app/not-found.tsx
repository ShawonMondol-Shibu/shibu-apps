"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center">
      <div className="text-center grid place-items-center gap-10">
        <Image src={"/assets/error-404.png"} alt="" width={500} height={500} />
        <hgroup className="space-y-4">
          <h1 className="capitalize text-3xl font-semibold  text-center">
            Oops, page not found!
          </h1>
          <p>The page you are looking for is not available.</p>
          <Button variant={"default"} onClick={() => history.back()}>
            Go Back!
          </Button>
        </hgroup>
      </div>
    </main>
  );
}
