import React from "react";
import DB from "@/db/db.json";
import Details from "./Details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const data = DB.find((item) => id == item.id);

  return (
    <main className="container m-auto p-5 ">
      <Details data={data} />
    </main>
  );
}
