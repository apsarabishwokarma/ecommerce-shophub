import Button from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center ">
        <h1 className="font-bold text-3xl">Login</h1>
        <p> welcome</p>

        <input type="text" placeholder="enter your phone number"></input>
        <input type="password"></input>
        <Button>Login</Button>
      </div>
    </>
  );
}
