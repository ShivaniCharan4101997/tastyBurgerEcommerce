import About from "@/components/custom/About";
import Brand from "@/components/custom/Brand";
import Contact from "@/components/custom/Contact";
import Free_Items from "@/components/custom/Free_Items";
import HeroSection from "@/components/custom/HeroSection";
import HomeMenu from "@/components/custom/HomeMenu";
import Promotion from "@/components/custom/Promotion";
import Review from "@/components/custom/Review";
import Store from "@/components/custom/Store";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <HomeMenu />
      <Free_Items />
      <Promotion />
      <Store />
      <Brand />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
