"use client";

import { heroCarouselItems } from "@/data/hero-carousel";
import { useState } from "react";
import CarouselItem from "./carousel-item";

export default function HeroWithNoAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <CarouselItem
        onPrevious={() => {
          if (currentIndex === 0) {
            setCurrentIndex(heroCarouselItems.length - 1);
          } else {
            // setCurrentIndex(currentIndex - 1);
            setCurrentIndex((i) => i - 1);
          }
        }}
        onNext={() => {
          if (currentIndex === heroCarouselItems.length - 1) {
            setCurrentIndex(0);
          } else {
            // setCurrentIndex(currentIndex + 1);
            setCurrentIndex((prev) => prev + 1);
          }
        }}
        // title={heroCarouselItems[currentIndex].title}
        // category={heroCarouselItems[currentIndex].category}
        // subtitle={heroCarouselItems[currentIndex].subtitle}
        // image={heroCarouselItems[currentIndex].image}
        {...heroCarouselItems[currentIndex]}
      />
    </>
  );
}
