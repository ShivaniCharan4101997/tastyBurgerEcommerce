const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Full Width Background Image */}
      <div className="w-full h-[400px]">
        <img
          src="/Food_Assets/assets/about/about-1.jpg"
          alt="About Full BG"
          className="w-full h-full object-cover -mt-32"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-yellow-700">
            About Tasty Burgers
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We deliver more than just burgers. We deliver smiles, memories, and
            moments of joy through every bite.
          </p>
        </div>
      </section>

      {/* About the Chef */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Image on Left */}
          <div className="flex-1">
            <img
              src="/Food_Assets/assets/about/aboutChef.jpg"
              alt="Chef"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Text on Right */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">
              Meet Our Chef
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Chef Antonio, with 20+ years of culinary expertise, brings magic
              to our burgers. From Michelin-star kitchens to street food
              festivals, he has redefined what it means to savor a burger.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text on Left */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From a small kitchen in Miami to the hearts of thousands — our
              journey began with one dream: to redefine how burgers are made and
              delivered.
            </p>
          </div>

          {/* Image on Right */}
          <div className="flex-1">
            <img
              src="/Food_Assets/assets/about/aboutStory.jpg"
              alt="Our Story"
              className="rounded-3xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-yellow-100 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-800 mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Fresh Ingredients",
                desc: "Locally sourced, organic and delicious.",
              },
              {
                title: "Fast Delivery",
                desc: "30-minute guarantee. Always hot, always fresh.",
              },
              {
                title: "Loved by Many",
                desc: "1000+ satisfied customers and counting.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-700 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                feedback:
                  "Tasty Burger delivers the best burger I’ve ever had. The quality is unmatched!",
              },
              {
                name: "Rahul K.",
                feedback:
                  "Super quick delivery and great packaging. Will definitely order again!",
              },
              {
                name: "Emily G.",
                feedback:
                  "From buns to the sauces — everything screams gourmet. Absolutely loved it!",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="border p-6 rounded-xl bg-yellow-50 shadow-md hover:shadow-lg transition"
              >
                <p className="italic text-gray-700 mb-4">"{review.feedback}"</p>
                <h4 className="font-semibold text-yellow-800">
                  – {review.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20 bg-yellow-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Hungry to know more about us?
          </h2>
          <p className="text-lg mb-6">
            Drop us a message or visit us in person. We’d love to connect!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-yellow-700 font-bold px-6 py-3 rounded-full hover:bg-yellow-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
