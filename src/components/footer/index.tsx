import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-100 mb-10">
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
      </div>
      <div className="container mx-auto px-6  flex flex-wrap gap-8 justify-between py-10">
        {footerLinks.map(({ title, items }) => (
          <div key={title}>
            <h1 className="font-bold">{title}</h1>
            <ul>
              {items.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-base font-medium mb-2">Get In Touch</h2>
          <div className="flex">
            <input
              className="w-full bg-slate-200 p-4 focus:outline-none"
              placeholder="Your Email"
            ></input>
            <button className="bg-blue-400 p-4">Subscribe</button>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100">
        <div className="container mx-auto px-6 py-8">
          <p>Made With Love By @apsara All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: "Company Info",
    items: [
      {
        title: "About",
        link: "/about",
      },
      {
        title: "carrier",
        link: "/carrier",
      },
      {
        title: "We are hiring",
        link: "/hiring",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },

  {
    title: "Legal",
    items: [
      {
        title: "About",
        link: "/about",
      },
      {
        title: "carrier",
        link: "/carrier",
      },
      {
        title: "We are hiring",
        link: "/hiring",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Business Marketing",
        link: "/",
      },
      {
        title: "User Analytics",
        link: "/",
      },
      {
        title: "Live Chat",
        link: "/",
      },
      {
        title: "Unlimited Support",
        link: "/",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Ios & Android",
        link: "/",
      },
      {
        title: "Watch a Demo",
        link: "/",
      },
      {
        title: "Customer",
        link: "/",
      },
      {
        title: "API",
        link: "/",
      },
    ],
  },
];
