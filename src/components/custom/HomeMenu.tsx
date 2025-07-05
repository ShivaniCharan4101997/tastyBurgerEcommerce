import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

const mockData = [
  {
    id: "0001",

    image: "/Food_Assets/assets/menu/burger-11.jpg",
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",

    image: "/Food_Assets/assets/menu/burger-12.jpg",
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",

    image: "/Food_Assets/assets/menu/burger-13.jpg",
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",

    image: "/Food_Assets/assets/menu/burger-14.jpg",
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",

    image: "/Food_Assets/assets/menu/burger-15.jpg",
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",

    image: "/Food_Assets/assets/menu/burger-16.jpg",
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",

    image: "/Food_Assets/assets/menu/burger-17.jpg",
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",

    image: "/Food_Assets/assets/menu/burger-18.jpg",
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
];

const HomeMenu = () => {
  const [liked, setLiked] = useState(false);
  return (
    <section className="py-12 bg-yellow-50">
      {/* text */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-2">
          Our Crazy Burgers
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Juicy, cheesy, crispy & unforgettable! Taste the madness in every
          bite.
        </p>
      </div>
      {/* menu carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {mockData.map((item) => {
              return (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4"
                >
                  <Card className="relative hover:shadow-lg transition rounded-xl overflow-hidden">
                    <CardContent className="p-4 space-y-3 flex flex-col h-full justify-between">
                      {/* 🍔 Animated Burger Image */}
                      <div className="overflow-hidden rounded-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold text-yellow-700">
                          {item.title}
                        </div>

                        {/* ❤️ Wishlist Button (inline) */}
                        <button
                          onClick={() => setLiked(!liked)}
                          className="text-yellow-600 hover:text-yellow-800 transition"
                        >
                          <Heart
                            size={22}
                            strokeWidth={1.5}
                            fill={liked ? "currentColor" : "none"}
                          />
                        </button>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {item.paragraph}
                      </p>

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-700 font-bold">
                          ₹{item.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          ⭐ {item.rating}
                        </span>
                      </div>

                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* free items */}
    </section>
  );
};

export default HomeMenu;
