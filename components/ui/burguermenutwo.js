"use client"; 

import React, { useState } from "react";
import Link from 'next/link';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const statusis = [
  { value: "Shadcn ui", label: "Shadcn ui", Link: "/first" },
  { value: "Introduction", label: "Introduction", Link: "/introduction"},
  { value: "Installation", label: "Installation", Link: "/installation" },
  { value: "Typography", label: "Typography", Link: "/typography" },
  { value: "Alert Dialog", label: "Alert Dialog", Link: "/alert-dialog" },
  { value: "Progress", label: "Progress", Link: "/progress" },
  { value: "Scroll area", label: "Scroll area", Link: "/scroll-area" },
  { value: "Tabs", label: "Tabs", Link: "/tabs" },
  { value: "Tooltip", label: "Tooltip", Link: "/tooltip" },
  { value: "Contact", label: "Contact", Link: "/contact" },
];

export function ComboBoxResponsives() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState(null);

  const toggleMenu = () => setOpen(!open);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? selectedStatus.label : (
              <HamburgerMenu isOpen={open} toggleMenu={toggleMenu} />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <HamburgerMenu isOpen={open} toggleMenu={toggleMenu} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className={`fixed top-0 left-1 w-12 h-12 rounded-full flex flex-col justify-center items-center transition-all duration-300 bg-transparent md:hidden ${
        isOpen ? "bg-black" : ""
      }`}
      aria-label="Open Menu Button"
    >
      <span
        className={`block w-8 h-[3px] bg-white rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[7px]" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-[3px] bg-white rounded mt-1 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-[3px] bg-white rounded mt-1 transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      ></span>
    </button>
  );
}

function StatusList({ setOpen, setSelectedStatus }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>Opps!! No results found.</CommandEmpty>
        <CommandGroup>
          {statusis.map((status) => (
            <Link href={status.Link || '#'} passHref key={status.value}>
            <CommandItem className="cursor-pointer"
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                const selected = statusis.find((item) => item.value === value);
                setSelectedStatus(selected || null);
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
