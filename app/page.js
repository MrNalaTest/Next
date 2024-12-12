"use client";
import Image from "next/image";
import { Filters } from "@/components/ui/filters";
import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/Footer"
import "./globals.css";
import logowitty from "../app/img/logowitty.jpeg"


export default function Home() {

  const [selectedTag, setSelectedTag] = useState("All Products");

  return (
    <div>
      <Navbar />
          <div className="unicbg">
          </div>
    <div className="grid-rows-start-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-12">
        <div className="flex justify-stretch items-center logoinitial">
        <div className="mr-5 initial hover:shadow-white">
        <Image
          className="dark:invert -z-10 rounded-xl hover:cursor-pointer hover:bg-transparent"
          src={logowitty}
          alt="ecommerce logo"
          width={180} 
          height={38}
          priority
        />
        </div>
        <div>
        <h1 className="text-xl font-extrabold">Welcome to your ecommerce</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Here is your eCommerce storefront!!</li>
        </ol>
        </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-transparent dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Get started
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-transparent dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find out more
          </a>
        </div>
        <div className="mt-24">
          <div className="flex justify-start items-center">
            <Filters onFilterChange={setSelectedTag}/>
          </div>
         {/*  <div>
            <Cards selectedTag={selectedTag}/>
          </div> */}
        </div>
      </main>
    </div>
      <Footer />
    </div>
  );
}
