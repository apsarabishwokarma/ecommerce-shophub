import ProductCategory from "@/components/product/product-category";
import { redirect } from "next/navigation";

export default function ProductCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  if (!params.category) {
    redirect("/");
  }

  return <ProductCategory productCategory={params.category} />;
}
