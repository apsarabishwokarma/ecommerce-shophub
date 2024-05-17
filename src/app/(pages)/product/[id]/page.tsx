import ProductDetails from "@/components/product/product-details";
import { redirect } from "next/navigation";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id) {
    redirect("/");
  }

  return <ProductDetails productId={params.id} />;
}
