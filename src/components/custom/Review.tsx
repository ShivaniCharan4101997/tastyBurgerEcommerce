import author1 from "../../../public/Food_Assets/assets/blog/review-author-1.jpg";
import author2 from "../../../public/Food_Assets/assets/blog/review-author-2.jpg";
import author3 from "../../../public/Food_Assets/assets/blog/review-author-3.jpg";
import author5 from "../../../public/Food_Assets/assets/blog/review-author-5.jpg";
import reviewBg from "../../../public/Food_Assets/assets/blog/reviews.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    image: author1,
    name: "Amelie Newlove",
    role: "Burger Enthusiast",
    quote:
      "Etiam sapien sem at sagittis congue, augue massa varius sodales sapien undo tempus dolor egestas magna.",
  },
  {
    image: author2,
    name: "Jake Hollow",
    role: "Food Blogger",
    quote:
      "The flavors are mind-blowing! One bite and I’m in burger heaven. This place is my weekly ritual now.",
  },
  {
    image: author3,
    name: "Lisa Cameron",
    role: "Chef & Critic",
    quote:
      "Every burger is a piece of art. Crispy, juicy, and unforgettable — they’ve nailed it!",
  },
  {
    image: author5,
    name: "Ethan Blake",
    role: "Delivery Regular",
    quote:
      "Fast delivery, warm food, and huge portions. The app makes it too easy to order more!",
  },
];

const Review = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${reviewBg})` }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 drop-shadow">
          What Our Customers Say
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center px-2"
              >
                <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl shadow-lg p-8 max-w-xl text-white transition hover:scale-[1.01] duration-300">
                  <p className="text-lg italic mb-6 text-white/90">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full ring-2 ring-yellow-400 object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-yellow-300">
                        {t.name}
                      </h4>
                      <p className="text-sm text-white/70">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
