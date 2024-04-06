import Button from "@/components/ui/button";

export default function Signup() {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <h1>Sign up</h1>
        <p></p>
        <div className="flex flex-col p-4 m-4  gap-4 ">
          <input type="text" placeholder="enter your first name"></input>
          <input type="text" placeholder="enter your last name"></input>
          <input type="email" placeholder="enter your email"></input>
          <input type="number" placeholder="enter your phone number"></input>
          <input type="password" placeholder="enter password"></input>
          <input type="password" placeholder="enter password again"></input>
          <Button />
        </div>
      </div>
    </>
  );
}
