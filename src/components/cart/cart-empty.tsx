export default function CartEmpty() {
  return (
    <>
      <div className=" container mx-auto px-6 text-black">
        <h1 className="text-3xl font-bold">Your Cart is Empty !</h1>
        <p className="font-medium text-lg ">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    </>
  );
}
