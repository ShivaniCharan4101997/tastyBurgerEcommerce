import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import hero2 from "../../../public/Food_Assets/assets/hero/hero-2.png";
import bgImg from "../../../public/Food_Assets/assets/hero/hero-1.jpg";
import bannerImg from "../../../public/Food_Assets/assets/hero/price-badge-yellow.png";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 w-full">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
          <img
            src={hero2}
            alt="Big Mac"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Price Badge */}
          <div className="absolute -top-8 -right-8 text-center text-black">
            <img
              src={bannerImg}
              alt="price badge"
              className="w-[180px] h-[176px] object-contain"
            />
            <div className="absolute top-12 right-12 space-y-2">
              <h4 className="text-xl font-bold leading-none uppercase">Only</h4>
              <h4 className="text-4xl font-bold leading-none">$9.99</h4>
            </div>
          </div>
        </div>
        {/* Text Side */}
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-[70px] md:text-[100px] font-extrabold text-white leading-tight  text-center uppercase">
            <span className="block">New</span>
            <span className="block">Burger</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white font-semibold text-center capitalize mt-4">
            With Onions
          </h2>

          <p className="text-white/80 text-base md:text-lg mt-4 max-w-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            repellat harum ex impedit iste. Nemo amet magnam nisi quis alias?
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <Button
              size={"lg"}
              className="
            
            bg-yellow-500 mx-auto text-white hover:bg-yellow-600"
            >
              <Link to="/">Order Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
