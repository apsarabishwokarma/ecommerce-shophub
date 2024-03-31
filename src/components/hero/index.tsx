"use client";

import { heroCarouselItems } from "@/data/hero-carousel";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "../ui/button";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroCarouselItems[currentIndex].image})`,
        }}
        className="bg-cover bg-no-repeat h-screen max-h-[800px] bg-center relative"
      >
        <div className="flex flex-col text-white container mx-auto px-8 md:px-20 pt-[200px] gap-8">
          <p className="font-medium text-base">
            {heroCarouselItems[currentIndex].title}
          </p>
          <h1 className="font-bold text-3xl md:text-5xl">
            {heroCarouselItems[currentIndex].category}
          </h1>
          <p className="font-medium text-base">
            {heroCarouselItems[currentIndex].subtitle}
          </p>
          <Button />
        </div>

        <button
          onClick={() => {
            if (currentIndex === 0) return;
            // setCurrentIndex(currentIndex - 1);
            setCurrentIndex((i) => i - 1);
          }}
        >
          <GrPrevious
            className="absolute top-40% left-6"
            size={40}
            color="white"
          />
        </button>
        <button
          onClick={() => {
            if (currentIndex === 2) return;
            // setCurrentIndex(currentIndex + 1);
            setCurrentIndex((prev) => prev + 1);
          }}
        >
          <GrNext
            className="absolute top-40% right-6"
            size={40}
            color="white"
          />
        </button>
      </div>
    </>
  );
}
