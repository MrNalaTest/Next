"use client"
import "../../app/globals.css"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"


const DrawerCart = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
DrawerCart.displayName = "DrawerCart"

const DrawerTriggerCart = DrawerPrimitive.Trigger

const DrawerPortalCart = DrawerPrimitive.Portal

const DrawerCloseCart = DrawerPrimitive.Close

const DrawerOverlayCart = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props} />
))
DrawerOverlayCart.displayName = DrawerPrimitive.Overlay.displayName


const DrawerContentCart = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortalCart>
    <DrawerOverlayCart />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed right-0 top-0 z-50 h-full w-full sm:w-[400px] flex flex-col border bg-background rounded-l-3xl slideFromRight",
        className
      )}
      {...props}>
      <div className="absolute top-1/2 left-0 h-10 w-1 bg-muted transform -translate-y-1/2 sm:h-19 m-2 sm:w-2 cursor-pointer" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortalCart>
))
DrawerContentCart.displayName = "DrawerContentCart"

const DrawerHeaderCart = ({
  className,
  ...props
}) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props} />
)
DrawerHeaderCart.displayName = "DrawerHeaderCart"

const DrawerFooterCart = ({
  className,
  ...props
}) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
)
DrawerFooterCart.displayName = "DrawerFooterCart"

const DrawerTitleCart = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DrawerTitleCart.displayName = DrawerPrimitive.Title.displayName

const DrawerDescriptionCart = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DrawerDescriptionCart.displayName = DrawerPrimitive.Description.displayName

export {
  DrawerCart,
  DrawerPortalCart,
  DrawerOverlayCart,
  DrawerTriggerCart,
  DrawerCloseCart,
  DrawerContentCart,
  DrawerHeaderCart,
  DrawerFooterCart,
  DrawerTitleCart,
  DrawerDescriptionCart,
}
