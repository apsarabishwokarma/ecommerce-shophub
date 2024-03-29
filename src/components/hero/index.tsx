import Button from "../ui/button";

export default function Hero() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/herobg.jpeg)",
        }}
        className="bg-cover bg-no-repeat h-screen max-h-[800px] bg-center"
      >
        <div className="flex flex-col text-white container mx-auto px-6 pt-[200px] gap-8">
          <p className="font-medium text-base">Summer 2025</p>
          <h1 className="font-bold text-3xl md:text-5xl">NEW COLLECTION</h1>
          <p className="font-medium text-base">
            Elevating your shopping game, one click at a time.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}
