import Button from "../ui/button";

export default function ProductShowcase() {
  return (
    <>
      <div className="bg-green-200 text-black py-10 mt-20">
        <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-24 container mx-auto px-6">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="font-bold text-3xl ml-3">
              {" "}
              Grab Upto 50% Off On Selected Items
            </h1>
            <p className="font-medium text-lg">
              Explore our wide range of products
              <br /> Find everything you need to elevate your lifestyle
            </p>
            <Button />
          </div>
          <figure>
            <img
              src="/assets/offer.jpg"
              width={600}
              height={650}
              alt="banner"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
