import Button from "../ui/button";

export default function Hero() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/herobg.jpeg)",
        }}
        className="bg-cover bg-no-repeat h-screen max-h-[800px] relative"
      >
        <div className="flex flex-col text-white absolute left-[190px] top-[200px] gap-8">
          <p className="font-medium text-base">Summer 2025</p>
          <h1 className="font-bold text-5xl">NEW COLLECTION</h1>
          <p className="font-medium text-base">
            Elevating your shopping game, one click at a time.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}
