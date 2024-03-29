import Hero from "@/components/hero";
import ProductGrid from "@/components/product/product-grid";
import ProductShowcase from "@/components/product/productshowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <ProductShowcase />
    </>
  );
}
