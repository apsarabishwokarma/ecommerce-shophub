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
      </div>
    </>
  );
}
