import AppsCard from "@/components/layout/AppsCard";
import React from "react";
import DB from "@/db/db.json";
export default function Page() {
  return (
    <main>
      <section className="flex flex-wrap gap-5 items-center justify-center min-h-screen py-2">
        {DB.map((apps) => (
          <AppsCard key={apps.id} apps={apps} />
        ))}
      </section>
    </main>
  );
}
