"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import "../globals.css";
import Image from "next/image";

const Page = () => {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  // Cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Actualizar el contador visual
    const timerInterval = setInterval(() => {
      setTimer((prev) => (prev < 100 ? prev + 20 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimer(0); // Reinicia el contador
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimer(0); // Reinicia el contador
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setTimer(0); // Reinicia el contador
  };

  return (
    <div>
      <Navbar />
      <div className="unicbg2" />
      <div className="flex items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="font-bold text-2xl italic">
            eCommerce events we are gonna host soon!!
          </h1>
          <h2>Stay tuned to the next events!!</h2>
          <h3>Bear in mind all activities could switch schedule unexpectedly!!</h3>
          <p>Any changes in our events will be notified, do not worry!!</p>
        </div>
      </div>
      <div className="m-10">
        <h2 className="mountains-of-christmas-regular">
          🥯 Find more about our products tracking all news from our blog,
          All the events we are going to host will take place in Bogotá, but we
          are gonna schedule over the next year in multiple locations in
          Colombia as well as overseas, so stay tuned!!
        </h2>
      </div>
      <div className="m-5">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Carousel Images */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0 h-96 relative">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white-400 p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white-400 p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            ❯
          </button>

          {/* Indicators with Progress */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className="relative w-8 h-2 cursor-pointer bg-gray-800 rounded-full overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 h-full bg-white transition-all ${
                    activeIndex === index ? "w-full" : "w-0"
                  }`}
                  style={{
                    width: activeIndex === index ? `${timer}%` : "0%",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
