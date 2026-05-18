import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CourseSlider from "./CourseSlider";
import Review from "./Review";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title> Home | 10 Minute School Promo Codes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <CourseSlider></CourseSlider>
      <Review></Review>

      <div className="lg:mt-14 mt-7 border-4 border-red-500">
        <iframe
          className="w-full lg:h-[500px] md:h-[300px] h-[200px]"
          src="https://www.youtube.com/embed/SUjJages144?si=ujoEhOV6yriFvct-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
