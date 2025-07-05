import PromotionImg from "../../../public/Food_Assets/assets/promotion/pro.png";
import ParallexImg from "../../../public/Food_Assets/assets/parallax/bg.jpg";

const Promotion = () => {
  return (
    <div>
      {/* Promotion Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* 🍔 Image Left */}
          <div>
            <img
              src={PromotionImg}
              alt="Burger Promo"
              className="rounded-2xl w-full object-cover shadow-lg"
            />
          </div>

          {/* 📋 Text Right */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6">
              Nothing brings people together like a good burger
            </h2>
            <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <li className="border-l-4 border-yellow-600 pl-4">
                Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
              </li>
              <li className="border-l-4 border-yellow-600 pl-4">
                Fringilla risus, luctus mauris orci auctor purus euismod pretium
                purus pretium ligula rutrum tempor sapien
              </li>
              <li className="border-l-4 border-yellow-600 pl-4">
                Quaerat sodales sapien euismod purus blandit. Nemo ipsam egestas
                volute turpis dolores ut aliquam quaerat sodales sapien undo
                pretium a purus mauris
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${ParallexImg})` }}
      >
        <h2 className="text-3xl md:text-4xl text-white font-bold bg-black/50 px-6 py-4 rounded-lg shadow-lg">
          Taste the Difference 🍔
        </h2>
      </section>
    </div>
  );
};

export default Promotion;
