import ProductDetails from "@/components/product/product-details";
import { redirect } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id) {
    redirect("/");
  }
  //server-side data fetch
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return <ProductDetails product={product} />;
}
