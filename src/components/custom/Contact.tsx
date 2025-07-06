import { Link } from "react-router-dom";
import FooterBanner from "../../../public/Food_Assets/assets/footer/banner-1.jpg";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${FooterBanner})` }}
    >
      {/* Centered Glass Card */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl px-8 py-10 text-center shadow-xl text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          We Guarantee
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-yellow-800 mb-6">
          30 Minutes Delivery!
        </h3>
        <p className="text-black mb-6 leading-relaxed">
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
          primis libero tempus, blandit a cursus varius luctus neque magna.
        </p>
        <Link to={"/contact"}>
          <Button
            variant="outline"
            size={"lg"}
            className="border-yellow-600 text-yellow-700 hover:bg-yellow-100"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
