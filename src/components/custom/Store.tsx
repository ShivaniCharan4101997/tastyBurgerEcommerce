import appstore from "../../../public/Food_Assets/assets/shop/appstore.png";
import eshop from "../../../public/Food_Assets/assets/shop/e-shop.png";
import googleplay from "../../../public/Food_Assets/assets/shop/googleplay.png";

const Store = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* 🛍️ Image Left */}
        <div className="w-full md:w-1/2">
          <img
            src={eshop}
            alt="E-Shop Preview"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* 📱 Text + Download Links Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
            Download mobile App and <br /> save up to{" "}
            <span className="text-yellow-800">20%</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
            primis libero tempus, blandit varius
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src={appstore}
                alt="App Store"
                className="h-12 hover:scale-105 transition-transform"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src={googleplay}
                alt="Google Play"
                className="h-12 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
