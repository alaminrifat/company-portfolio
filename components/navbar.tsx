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

const solutions = [
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

const services = [
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
  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl sm:text-2xl">
          Amana<span className="text-primary">™</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 sm:px-4 py-2">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solution</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[calc(100vw-2rem)] sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[calc(100vw-2rem)] sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden sm:list-item">
              <Link href="/learn-more" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 sm:px-4 py-2">
                  Learn More
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:list-item">
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 sm:px-4 py-2">
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem className="hidden lg:list-item">
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 sm:px-4 py-2">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="text-sm sm:text-base sm:size-default"
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
});
ListItem.displayName = "ListItem";
