import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const phoneNumber = "+8801726374365";

  return (
    <div className="lg:mt-14 mt-12 relative z-40">
      <footer className="bg-[#403f3f] text-white pt-8">
        <div className="max-w-screen-xl mx-auto px-10 lg:px-4">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* Logo and Contact */}
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div>
                <Link to="/" className="text-2xl font-bold flex items-center">
                  <img src="ms.png" alt="" className="w-44" />
                </Link>
                <p className="flex items-center mt-4">
                  <MapPin className="mr-2 text-red-500" /> Rangpur Divition,
                  Bangladesh
                </p>
                <p className="flex items-center mt-2">
                  <Mail className="mr-2 text-red-500" /> promo10ms@gmail.com
                </p>
                <p className="flex items-center mt-2">📞 +880 1726374365</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4 w-64">
                <Link
                  to="https://www.facebook.com/share/1AVaDAZxwG/"
                  className="bg-black gap-2 hover:text-blue-400 text-white px-2 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span>Account</span>
                </Link>
                <Link
                  to="https://facebook.com/groups/1553731405509665/"
                  className="bg-black gap-2 hover:text-blue-400 text-white px-2 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span>Group</span>
                </Link>
                <Link
                  to="https://www.facebook.com/people/Muntasin-Billa/61571193290759/"
                  className="bg-black gap-2 hover:text-blue-400 text-white px-2 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span>Page</span>
                </Link>
                <Link
                  to="https://www.youtube.com/@user-ty1eg1lf1o"
                  className="bg-black gap-2 hover:text-red-400 text-white px-2 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span>Youtube</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                  আমাদের সম্পর্কে
                </h3>
                <p className="text-gray-100 text-base mt-2">
                  10 Minute School Promo Codes-এ আপনি ১০ মিনিট স্কুলের সকল
                  কোর্সের প্রোমো কোড পাবে। এখানে অনেক ফ্রি ভিডিও পাওয়া যায়, তবে
                  পেইড কোর্সের জন্য আমরা রেজিস্টার ক্লাইন্ট থেকে অনেক কম দামে
                  প্রোমো কোড সংগ্রহ করি।
                </p>
              </div>

              {/* Online Batches */}
              <div>
                <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                  অনলাইন ব্যাচ
                </h3>
                <div className="text-gray-400 text-sm mt-2 space-y-1 flex flex-col">
                  <Link
                    className="hover:underline hover:text-green-600"
                    to="/classSix"
                  >
                    📌 ৬ষ্ঠ শ্রেণি - অনলাইন ব্যাচ ২০২৫
                  </Link>
                  <Link
                    className="hover:underline hover:text-green-600"
                    to="/classSeven"
                  >
                    📌 ৭ম শ্রেণি - অনলাইন ব্যাচ ২০২৫
                  </Link>
                  <Link
                    className="hover:underline hover:text-green-600"
                    to="/classEight"
                  >
                    📌 ৮ম শ্রেণি - অনলাইন ব্যাচ ২০২৫
                  </Link>
                  <Link
                    className="hover:underline hover:text-green-600"
                    to="/classNine"
                  >
                    📌 ৯ম শ্রেণি - অনলাইন ব্যাচ ২০২৫
                  </Link>
                  <Link
                    to="/classTen"
                    className="hover:underline hover:text-green-600"
                  >
                    📌 ১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫
                  </Link>
                </div>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" gap-2 hover:bg-black bg-green-600 hover:text-white px-4 py-1 mt-2 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span> whatsApp করুন: +8801726374365</span>
                </a>
              </div>

              {/* HSC & SSC Courses */}
              <div>
                <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                  HSC , SSC & Skills কোর্সসমূহ
                </h3>
                <div className="text-gray-400 flex flex-col text-sm mt-2 space-y-1">
                  <Link
                    to="/classTen"
                    className="hover:underline hover:text-green-600"
                  >
                    📌 SSC 26 এর কোর্সসমূহ
                  </Link>
                  <Link
                    to="/hsc"
                    className="hover:underline hover:text-green-600"
                  >
                    📌 HSC 26 এর কোর্সসমূহ
                  </Link>
                  <Link
                    to="/allSkills"
                    className="hover:underline hover:text-green-600"
                  >
                    📌 সকল স্কিলস এর কোর্সসমূহ
                  </Link>
                  <Link
                    to="/freeSkills"
                    className="hover:underline hover:text-green-600"
                  >
                    📌 ফ্রি কোর্সসমূহ এর কোর্সসমূহ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black text-center text-white py-2 mt-6">
          Copyright © promo10MSshop 2025. All Rights Reserved. <br /> Developed
          by <span className="font-bold text-yellow-300">Masum Billah</span>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
