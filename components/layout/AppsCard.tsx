import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Download, Star } from "lucide-react";

interface AppsCardProps {
  image: string;
  title: string;
  downloads: number;
  ratingAvg: number;
  id: number;
}

export default function AppsCard({ apps }: { apps: AppsCardProps }) {
  const { id, image, title, downloads, ratingAvg } = apps;
  return (
    <Link href={`/appDetails/${id}`}>
      <Card className="mb-4 w-96 cursor-pointer hover:shadow-lg transition-shadow">
        <CardContent>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="m-auto w-full"
          />
        </CardContent>

        <CardFooter className="grid gap-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600 flex items-center gap-2 justify-between">
            <span className="flex items-center gap-2">
              <Download size={16} />
              {downloads}
            </span>
            <span className="flex items-center gap-2">
              <Star fill="orange" strokeWidth={1} size={16} />
              {ratingAvg}
            </span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
