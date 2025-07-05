import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aboutBgImg from "/Food_Assets/assets/about/about-1.jpg";

// Mock Data
const mockData = [
  {
    image: "/Food_Assets/assets/about/pizza.png",
    title: "Original Pizza",
    paragraph: "Our classic pizza with homemade sauce and fresh mozzarella.",
  },
  {
    image: "/Food_Assets/assets/about/salad.png",
    title: "Fresh Salad",
    paragraph: "A refreshing mix of greens, veggies, and signature dressings.",
  },
  {
    image: "/Food_Assets/assets/about/delivery-bike.png",
    title: "Fast Delivery",
    paragraph: "Hot and fresh food delivered to your doorstep in no time.",
  },
];

const About = () => {
  return (
    <section className="py-12 bg-yellow-50">
      {/* Hero background image */}
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center rounded-lg shadow mb-12"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 drop-shadow">
            The burger tastes better when you eat it with your family
          </h2>
          <p className="text-primary-foreground max-w-2xl mx-auto mb-6">
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae integer orci
            congue and metus integer primis in integer metus
          </p>
          <Link to="/">
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700 mb-8">
              Explore Full Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {mockData.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <CardHeader className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 mb-4"
              />
              <CardTitle className="text-yellow-700">{item.title}</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                {item.paragraph}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
