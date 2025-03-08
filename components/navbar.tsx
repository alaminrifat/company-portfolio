"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
}

const solutions: MenuItem[] = [
  {
    title: "Web Development",
    href: "/solution/web-development",
    description: "Modern web solutions using cutting-edge technologies.",
  },
  {
    title: "Mobile Development",
    href: "/solution/mobile-development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    title: "Cloud Solutions",
    href: "/solution/cloud",
    description: "Scalable and reliable cloud infrastructure.",
  },
];

const services: MenuItem[] = [
  {
    title: "UI/UX Design",
    href: "/service/design",
    description: "User-centered design solutions.",
  },
  {
    title: "ML & AI",
    href: "/service/ml-ai",
    description: "Advanced machine learning and AI solutions.",
  },
  {
    title: "Consulting",
    href: "/service/consulting",
    description: "Expert technology consulting services.",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  return (
    <header className="fixed top-0 w-full z-50 glass backdrop-blur-md">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl sm:text-2xl">
          Amana<span className="text-primary">™</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm sm:text-base hover:text-primary">
            Home
          </Link>
          <Link
            href="/team"
            className="text-sm sm:text-base hover:text-primary"
          >
            Team
          </Link>
          <DropdownMenu title="Solution" items={solutions} />
          <DropdownMenu title="Service" items={services} />
          <Link
            href="/learn-more"
            className="text-sm sm:text-base hover:text-primary"
          >
            Learn More
          </Link>
          <Link
            href="/career"
            className="text-sm sm:text-base hover:text-primary"
          >
            Career
          </Link>
        </nav>

        <Button asChild variant="outline" size="sm" className="hidden md:block">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 space-y-4">
          <Link href="/" className="block py-2 hover:text-primary">
            Home
          </Link>
          <DropdownMenu title="Solution" items={solutions} mobile />
          <DropdownMenu title="Service" items={services} mobile />
          <Link href="/learn-more" className="block py-2 hover:text-primary">
            Learn More
          </Link>
          <Link href="/career" className="block py-2 hover:text-primary">
            Career
          </Link>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  mobile?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {items.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
