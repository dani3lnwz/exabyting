import logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <section className="container mx-auto mt-[130px]">
      <hr className="h-px my-6 bg-gray-300 border-none " />
      <footer className="px-16">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div>
                  <h3 className=" font-semibold text-black ">Products</h3>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Features
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Enterprise
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Innovation
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Offline
                  </a>
                </div>

                <div>
                  <h3 className=" font-semibold text-black ">Company</h3>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    About
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Our Story
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className=" font-semibold text-black ">Support</h3>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Documentation
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Community
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    Contact
                  </a>
                  <a href="#" className="block mt-2 text-sm   hover:underline">
                    FAQ
                  </a>
                </div>

                <div className="border-l border-[#010C23] h-32 w-1"></div>

                <div className="-ml-32">
                  <div className="">
                    <div>
                      <img src={logo} alt="" />
                    </div>
                    <h1 className="font-semibold mt-3 text-xl">
                      Tristique senectus et netus et malesuada fames
                    </h1>
                    <p className="text-start mt-3">
                      © Made by{" "}
                      <span className="text-firstly">Mehedi Hassan</span> -
                      Powered by <span className="text-firstly">exabyting</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
