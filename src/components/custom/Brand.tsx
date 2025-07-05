import brand11 from "../../../public/Food_Assets/assets/brands/brand-11.png";
import brand12 from "../../../public/Food_Assets/assets/brands/brand-12.png";
import brand13 from "../../../public/Food_Assets/assets/brands/brand-13.png";
import brand14 from "../../../public/Food_Assets/assets/brands/brand-14.png";
import brand15 from "../../../public/Food_Assets/assets/brands/brand-15.png";
import brand16 from "../../../public/Food_Assets/assets/brands/brand-16.png";
import brand17 from "../../../public/Food_Assets/assets/brands/brand-17.png";
import brand18 from "../../../public/Food_Assets/assets/brands/brand-18.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brandLogos = [
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
];

const Brand = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold text-yellow-700 mb-2">
          Trusted By Top Brands
        </h2>
        <p className="text-muted-foreground text-sm">
          Leading names trust our flavors and quality.
        </p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {brandLogos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 p-6"
            >
              <div className="flex items-center justify-center h-36 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Brand;
