import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = ["Home", "About", "Our Menu", "Shop", "Blog", "Contact"];

  return (
    <nav>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex px-4 py-2 rounded-lg shadow-md">
        <NavigationMenuList className="flex gap-2">
          {navItems.map((label) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink asChild>
                <Link
                  to={
                    label === "Home"
                      ? "/"
                      : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="px-4 py-2 rounded-radius bg-primary text-secondary font-semibold transition-colors duration-200"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-6 text-yellow-800"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-yellow-50 text-yellow-900">
          <div className="flex flex-col gap-4 mt-6 font-semibold text-lg">
            {navItems.map((label) => (
              <Link
                key={label}
                to={
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="pl-10 hover:text-yellow-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
