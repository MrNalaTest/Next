"use client";

import React, { useState } from 'react'
import { ComboBoxResponsives } from '@/components/ui/burguermenutwo';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/button-theme';
import { NavigationMenuDemo } from '@/components/ui/menu';
import { ShoppingCart } from 'lucide-react';
import { DrawerCart, DrawerTriggerCart, DrawerContentCart } from "@/components/ui/drawercart";
import Cart from "@/components/ui/cart";


export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div> 
        <div className="fixed min-h-10 max-h-24 w-full backdrop-blur-md bg-white/1 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.9)] content-center justify-around z-50">
        <div className="flex content-center justify-between">
          <div className="m-2 burger-icon">
            <ComboBoxResponsives />
          </div>
          <div className="m-2 large-menu">
            <NavigationMenuDemo />
          </div>
          <div className="m-2 flex content-center justify-around">
            <div className="">
              <div className="w-12 h-9">
                <ModeToggle />
              </div>
            </div>
            <div className="mr-2">
              <DrawerCart open={isCartOpen} onOpenChange={setIsCartOpen}>
                <DrawerTriggerCart asChild>
                  <Button
                    className="w-12 h-9"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart />
                  </Button>
                </DrawerTriggerCart>
                <DrawerContentCart >
                  <Cart />
                </DrawerContentCart>
              </DrawerCart>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}
