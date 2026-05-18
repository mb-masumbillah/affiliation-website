import { Link } from "react-router-dom";



// const cards = [
//   {
//     title: "HSC\n26",
//     subtitle: "HSC ২৬",
//     color: "blue",
//     icon: "🏆",
//   },
//   {
//     title: "HSC\n27",
//     subtitle: "HSC ২৭",
//     color: "blue",
//     icon: "🎯",
//   },
//   {
//     title: "HSC\n28",
//     subtitle: "HSC ২৮",
//     color: "blue",
//     icon: "🎒",
//   },
//   {
//     title: "SSC\n27",
//     subtitle: "দশম শ্রেণি",
//     color: "orange",
//     icon: "📜",
//     badge: "২০২৬ সালে ভর্তি চলছে",
//     borderColor: "border-orange-400/60",
//   },
//   {
//     title: "CLASS\n9",
//     subtitle: "৯ম শ্রেণি",
//     color: "green",
//     icon: "🎓",
//     badge: "২০২৬ সালে ভর্তি চলছে",
//     borderColor: "border-green-400/60",
//   },
//   {
//     title: "CLASS\n6,7,8",
//     subtitle: "৬ষ্ঠ, ৭ম, ৮ম শ্রেণি",
//     color: "green",
//     icon: "🎒",
//     badge: "২০২৬ সালে ভর্তি চলছে",
//     borderColor: "border-green-400/60",
//   },
// ];


const cards = [

  {
    title: "hsc-28-pcmb.jpg",
    subtitle: "Science ",
    color: "green",
    icon: "📜",
    badge: "Pre-Book করুন",
    link: "https://10ms.io/WF45mc"
  },
  {
    title: "hsc-28-arts.jpg",
    subtitle: "Humanities",
    color: "orange",
    icon: "📜",
    badge: "Pre-Book করুন",
    borderColor: "border-orange-400/60",
        link: "https://10ms.io/QF45Wd"
  },
  {
    title: "hsc-28-buniess.jpg",
    subtitle: "Business Studies",
    color: "blue",
    icon: "📜",
    badge: "Pre-Book করুন",
    borderColor: "border-green-400/60",
    link:"https://10ms.io/KF45WM"
  },
  {
    title: "hsc-28-bei.jpg",
    subtitle: "Bangla - English - ICT",
    color: "blue",
    icon: "📜",
    badge: "Pre-Book করুন",
    borderColor: "border-blue-400/60",
    link: "https://10ms.io/TF45Rd"
  },

];

const innerCardColors = {
  blue: "from-sky-400 to-blue-600",
  orange: "from-orange-400 to-orange-600",
  green: "from-green-400 to-green-600",
};

const Banner = () => {

  const phoneNumber = "+8801726374365";
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center justify-center px-4 py-16">

      {/* Stars dot-pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Red planet glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "480px",
          background:
            "radial-gradient(ellipse at center, rgba(180,20,20,0.55) 0%, rgba(120,10,10,0.3) 45%, transparent 70%)",
          borderRadius: "50%",
          top: "-120px",
          filter: "blur(2px)",
        }}
      />

      {/* Planet arc border */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "420px",
          top: "60px",
          borderTop: "1.5px solid rgba(220,80,80,0.45)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="text-5xl md:text-7xl font-black leading-tight"
            style={{
              background: "linear-gradient(90deg,#fbbf24 0%,#f9a8d4 45%,#67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HSC-28 Pre-Booking চলছে
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 leading-5">
            সব ক্লাসের একমাত্র সমাধান - এক প্ল্যাটফর্মে!
          </p>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 leading-5">
            সেরা শিক্ষক, সেরা কন্টেন্ট - তোমার সাফল্য নিশ্চিত!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-7 -mt-5 mb-14">
          {cards.map((card, i) => (
            <Link to={card?.link} key={i} className="flex flex-col items-center">

              {/* Glass outer card */}
              <div
                className={`
                  relative w-[300px] h-[250px] rounded-[32px] p-[13px]
                  bg-white/[0.08] backdrop-blur-xl
                  border ${card.borderColor ?? "border-white/20"}
                  hover:scale-105 hover:bg-white/[0.13]
                  transition-all duration-300 cursor-pointer
                  overflow-hidden
                `}
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                {/* Gloss sheen */}
                <div
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, transparent 55%)",
                  }}
                />

                {/* Inner coloured card */}
                <div
                  className={`
                    rounded-[24px] h-[190px]
                    bg-gradient-to-b ${innerCardColors[card.color]}
                    flex flex-col items-center justify-center
                    border border-white/10
                    relative overflow-hidden
                  `}

                  style={{
                    backgroundImage: `url(${card?.title})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                  }}
                >



                </div>

                {/* Subtitle */}
                <div className="flex items-center justify-center h-[44px]">
                  <p
                    className="text-[1.15rem] font-bold text-white/90"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Admission badge */}
              {card.badge && (
                <div
                  className="mt-4 px-5 py-[7px] rounded-full border border-orange-300/50"
                  style={{
                    background: "linear-gradient(90deg,#dc2626,#ea580c)",
                    boxShadow: "0 4px 16px rgba(220,38,38,0.4)",
                  }}
                >
                  <p className="text-xl font-semibold text-white whitespace-nowrap">
                    {card.badge}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>

      </div>

      {/* Floating Buttons */}
      <div className="fixed right-5 bottom-5 flex flex-col gap-4 z-50">


        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 text-2xl shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-green-600 rounded-full p-2 animate-bounce"
        >
          <img
            src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
            alt=""
            className="lg:w-10 md:w-14 w-6 cursor-pointer"
            title="যোগাযোগ করুন +880 1726374365"
          />
        </a>
        <Link
          target="_blank"
          to="https://www.youtube.com/@user-ty1eg1lf1o"
          className="w-14 h-14 text-2xl shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-green-600 rounded-full p-2 animate-bounce"
        >
          <img
            src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000"
            alt=""
            className="lg:w-10 md:w-14 w-6 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;