"use client";

import { heroCarouselItems } from "@/data/hero-carousel";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSearch } from "../header/search-context";
import CarouselItem from "./carousel-item";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { searchQuery } = useSearch();

  if (searchQuery) return <></>;

  return (
    <div className={`flex overflow-hidden relative`}>
      {heroCarouselItems.map((item, index) => (
        <div
          key={index}
          className={`w-screen min-w-[100vw] ml-0  transition-all duration-1000`}
          style={{
            marginLeft: index === 0 ? `-${currentIndex * 100}vw` : "0",
          }}
        >
          <CarouselItem key={index} {...item} />
        </div>
      ))}
      <button
        onClick={() => {
          if (currentIndex === 0) {
            setCurrentIndex(heroCarouselItems.length - 1);
          } else {
            // setCurrentIndex(currentIndex - 1);
            setCurrentIndex((i) => i - 1);
          }
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
          if (currentIndex === heroCarouselItems.length - 1) {
            setCurrentIndex(0);
          } else {
            // setCurrentIndex(currentIndex + 1);
            setCurrentIndex((prev) => prev + 1);
          }
        }}
      >
        <GrNext className="absolute top-40% right-6" size={40} color="white" />
      </button>
    </div>
  );
}
