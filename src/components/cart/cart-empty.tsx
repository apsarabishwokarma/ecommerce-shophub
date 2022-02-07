import Image from "next/image";
export default function CartEmpty() {
  return (
    <>
      <div className="flex flex-col gap-10 container mx-auto px-6 ">
        <div className="items-center justify-center text-xl text-gray-400">
          Your cart is empty !
        </div>

        <div className="items-center justify-center text-lg text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </div>
        <figure className="">
          <Image
            src="https://plus.unsplash.com/premium_photo-1678249204250-66d7ec4e6008"
            alt="Empty cart"
            height={200}
            width={200}
            className="w-full h-full object-cover"
            quality={100}
          />
        </figure>
      </div>
    </>
  );
}
