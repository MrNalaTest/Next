/* "use client";

import React, { useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger, } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";

const statuses = [
  { value: "Offerts", label: "Offerts" },
  { value: "All Products", label: "All Products" },
  { value: "Old Collection", label: "Old Collection" },
  { value: "New Collection", label: "New Collection" },
  { value: "Give-away", label: "Give away" },
];

export function ComboBoxResponsive() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? selectedStatus.label : "+ Set Filters"}
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
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? selectedStatus.label : "+ Set Filters"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ setOpen, setSelectedStatus }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>Opps!! No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                const selected = statuses.find((item) => item.value === value);
                setSelectedStatus(selected || null);
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
 */

"use client";

import React, { useState } from "react";
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
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const statuses = [
  { value: "Offerts", label: "Offerts" },
  { value: "All Products", label: "All Products" },
  { value: "Old Collection", label: "Old Collection" },
  { value: "New Collection", label: "New Collection" },
  { value: "Give-away", label: "Give away" },
];

export function ComboBoxResponsive({ onFilterChange }) { //this is a prop we are passing 
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState("All Products");

  const handleSelect = (value) => {
    setSelectedStatus(value);
    onFilterChange(value); // Notifica el cambio hacia el componente padre (filter.js)
    setOpen(false);
  };

  return isDesktop ? (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <StatusList onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList onSelect={handleSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ onSelect }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>Opps!! No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={() => onSelect(status.value)}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
