import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Topbar() {
  return (
    <>
      <div className="bg-black text-white justify-between md:flex  hidden px-4 py-4">
        <p className="flex items-center justify-center font-bold">
          <IoCallOutline className="mr-2" size={16} /> 01-645781
        </p>
        <p className="flex items-center justify-center font-bold">
          <IoMailOutline className="mr-2" size={16} />
          apsara.shophub@gmail.com
        </p>
        <p className="font-bold">Follow us and get chance to win 80% off</p>
        <div className="flex items-center justify-center">
          <p className="mr-2 font-bold">Follow Us :</p>
          <FaFacebook className="mr-2" />
          <FaInstagram className="mr-2" />
          <FaTwitter className="mr-2" />
        </div>
      </div>
    </>
  );
}
