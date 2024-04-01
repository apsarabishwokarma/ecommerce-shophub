import HeroCarousel from "@/components/hero/hero-carousel";
import ProductGrid from "@/components/product/product-grid";
import ProductShowcase from "@/components/product/productshowcase";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      {/* <Hero /> */}
      <ProductGrid />
      <ProductShowcase />
    </>
  );
}
