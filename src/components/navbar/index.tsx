const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black hover:text-white hover:border-white">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4"
            >
              About
            </a>
            <a
              href="#products"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4"
            >
              Products
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
