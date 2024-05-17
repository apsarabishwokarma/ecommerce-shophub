import ProductGrid from "@/components/product/product-grid";
import { redirect } from "next/navigation";

export default function ProductCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  if (!params.category) {
    redirect("/");
  }

  return (
    <ProductGrid
      category={params.category}
      title={`Products > ${params.category}`}
    />
  );
}
