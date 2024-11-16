"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Contact us",
    href: "/Contact us",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Services",
    href: "/Services",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Queries",
    href: "/Queries",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Social Responsibility",
    href: "/Social-Responsibility",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Activism",
    href: "/Activism",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Developer docs",
    href: "/Developer-docs",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-10">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/first"
                  >
                    <Icons.home className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Your eCommerce!! 🤞
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We help you with Beautifully designed components that makes leverge your eCommerce business.
                      We use open source matterial but a really good one.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/introduction" title="Introduction">
                Your second page section where you can add whaterever you want.
              </ListItem>
              <ListItem href="/progress" title="Installation">
                Third page section where you can add whaterever you want.
              </ListItem>
              <ListItem href="/typography" title="Typography">
                Four page section where you can add whaterever you want.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/progress" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              More stuff
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
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
