"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface InstalledType {
  image: string;
  title: string;
  id: number;
  download?: number;
  rating?: number;
  size?: number;
}

interface AppContextType {
  installed: InstalledType[];
  setInstalled: React.Dispatch<React.SetStateAction<InstalledType[]>>;
  handleInstall: (
    id: number,
    title: string,
    image: string,
    downloads?: number,
    ratingAvg?: number,
    size?: number
  ) => void;
}

export const appContext = createContext<AppContextType | undefined>(undefined);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [installed, setInstalled] = useState<InstalledType[]>([]);

  useEffect(() => {
    const storedApps = localStorage.getItem("apps-data");
    if (storedApps) {
      setInstalled(JSON.parse(storedApps));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("apps-data", JSON.stringify(installed));
  }, [installed]);

  const handleInstall = (
    id: number,
    title: string,
    image: string,
    downloads?: number,
    ratingAvg?: number,
    size?: number
  ) => {
    // Prevent duplicate installs by id (optional)
    if (!installed.find((app) => app.id === id)) {
      setInstalled([
        ...installed,
        {
          image,
          id,
          title,
          download: downloads,
          rating: ratingAvg,
          size,
        },
      ]);
    }
  };

  return (
    <appContext.Provider value={{ installed, setInstalled, handleInstall }}>
      {children}
    </appContext.Provider>
  );
}
