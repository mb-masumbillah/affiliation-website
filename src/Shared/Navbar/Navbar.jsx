import { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu & Close Icons

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const liStyle =
    "px-4 py-2 hover:bg-gray-200 cursor-pointer border-t-2 text-center font-bold hover:text-red-500";

  // Scroll tracking to add sticky class
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Sticky navbar */}
      <nav
        className={`bg-white shadow-md px-6 py-2 ${
          isSticky ? "fixed top-0 w-full z-50" : ""
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/" className="lg:text-2xl font-bold text-black">
            <img src="logo2.png" alt="" className="w-36" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="text-black font-bold">
              HOME
            </Link>

            {/* অনলাইন ব্যাচ */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-black font-semibold">
                <span>অনলাইন ব্যাচ</span>
                <AiOutlineDown className="text-gray-500 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute -left-[14px] mt-0 pt-[23px] w-40 bg-white shadow-lg opacity-0 scale-y-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-y-100 flex flex-col group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out origin-top rounded-b-md z-50">
                <Link to="/classSix" className={liStyle}>
                  Class 6
                </Link>
                <Link to="/classSeven" className={liStyle}>
                  Class 7
                </Link>
                <Link to="/classEight" className={liStyle}>
                  Class 8
                </Link>
                <Link to="/classNine" className={liStyle}>
                  Class 9
                </Link>
                <Link to="/classTen" className={liStyle}>
                  Class 10
                </Link>
              </div>
            </div>

            {/* HSC & SSC কোর্সসমূহ */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-black font-semibold">
                <span>HSC & SSC কোর্সসমূহ</span>
                <AiOutlineDown className="text-gray-500 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute -left-[10px] mt-0 pt-[24px] w-52 bg-white shadow-lg opacity-0 scale-y-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out origin-top rounded-b-md z-50">
                <div className="text-black flex flex-col">
                  <Link to="/classTen" className={liStyle}>
                    SSC 26
                  </Link>
                  <Link to="/hsc" className={liStyle}>
                    HSC 26
                  </Link>
                </div>
              </div>
            </div>

            {/* স্কিলস কোর্সসমূহ */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-black font-semibold">
                <span>স্কিলস কোর্সসমূহ</span>
                <AiOutlineDown className="text-gray-500 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute -left-[10px] mt-0 pt-[24px] w-44 bg-white shadow-lg opacity-0 scale-y-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out origin-top rounded-b-md z-50">
                <div className="text-black flex flex-col">
                  <Link to="allSkills" className={`-px-2 ${liStyle}`}>
                    সকল স্কিলস
                  </Link>
                  <Link to="freeSkills" className={`-px-2 ${liStyle}`}>
                    ফ্রি কোর্সসমূহ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/helpCenter"
            className="bg-green-600 text-white md:px-4 md:py-2 p-1  text-xs md:text-xl rounded-md"
          >
            Help Center
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden z-50 fixed top-14 right-0 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 scale-y-100 max-h-screen"
              : "opacity-0 scale-y-0 max-h-0"
          }`}
          style={{
            transformOrigin: "top",
          }}
        >
          <div className="flex flex-col text-black font-semibold">
            <Link to="/" className={liStyle}>
              HOME
            </Link>
            <Link to="/classSix" className={liStyle}>
              Class 6
            </Link>
            <Link to="/classSeven" className={liStyle}>
              Class 7
            </Link>
            <Link to="/classEight" className={liStyle}>
              Class 8
            </Link>
            <Link to="/classNine" className={liStyle}>
              Class 9
            </Link>
            <Link to="/classTen" className={liStyle}>
              Class 10
            </Link>
            <Link to="/classTen" className={liStyle}>
              SSC 26
            </Link>
            <Link to="/hsc" className={liStyle}>
              HSC 26
            </Link>
            <Link to="allSkills" className={`-px-2 ${liStyle}`}>
              সকল স্কিলস
            </Link>
            <Link to="freeSkills" className={`-px-2 ${liStyle}`}>
              ফ্রি কোর্সসমূহ
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
