import { AiOutlineShopping } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="container mx-auto px-6 flex text-black justify-between items-center gap-2 py-10">
        <h2 className="font-bold flex mr-2">
          ShopHub <AiOutlineShopping size={20} />
        </h2>
        <div className="flex items-center justify-center">
          <p className="mr-2 font-bold">Follow Us :</p>
          <FaFacebook className="mr-2" />
          <FaInstagram className="mr-2" />
          <FaTwitter className="mr-2" />
        </div>
      </div>
    </footer>
  );
}
