import HeroCarousel from "@/components/hero/hero-carousel";
import ProductGrid from "@/components/product/product-grid";
import ProductShowcase from "@/components/product/productshowcase";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ProductGrid
        heading="Featured Products"
        title="BEST SELLER PRODUCTS"
        subtitle="Discover, click, and shop, Just a click away from your next
            purchase."
      />
      <ProductShowcase />
    </>
  );
}
