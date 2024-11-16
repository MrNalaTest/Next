"use client";

import React, { useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger, } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";

const statusis = [
  { value: "Contact us", label: "Contact us" },
  { value: "Introduction", label: "Introduction" },
  { value: "Installation", label: "Installation" },
  { value: "Typography", label: "Typography" },
  { value: "Alert Dialog", label: "Alert Dialog" },
  { value: "Progress", label: "Progress" },
  { value: "Scroll area", label: "Scroll area" },
  { value: "Tabs", label: "Tabs" },
  { value: "Tooltip", label: "Tooltip" },
  { value: "Contact", label: "Contact" },
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
            {selectedStatus ? selectedStatus.label : "+ Set status"}
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
          {selectedStatus ? selectedStatus.label : "+ Set status"}
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
          {statusis.map((status) => (
            <CommandItem
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
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}