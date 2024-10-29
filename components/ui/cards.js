"use client";    
import "../../app/globals.css";
import React from "react";
import { useCart } from "./cart-context";
import Image from "next/image";
import { Currency } from "lucide-react";



const products = [
  {
    tagid: "Offerts",
    Currency: "USD",
    id: 1,
    name: "Apple AirPods",
    price: "95.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Offerts",
    Currency: "USD",
    id: 2,
    name: "Apple AirPods",
    price: "889.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Offerts",
    Currency: "USD",
    id: 3,
    name: "Apple AirPods",
    price: "221.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Old Collection",
    Currency: "USD",
    id: 4,
    name: "Apple AirPods",
    price: "552.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Old Collection",
    Currency: "USD",
    id: 5,
    name: "Apple AirPods",
    price: "245.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Old Collection",
    Currency: "USD",
    id: 6,
    name: "Apple AirPods",
    price: "81.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "New Collection",
    Currency: "USD",
    id: 7,
    name: "Apple AirPods",
    price: "65.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "New Collection",
    Currency: "USD",
    id: 8,
    name: "Apple AirPods",
    price: "395.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "New Collection",
    Currency: "USD",
    id: 9,
    name: "Apple AirPods",
    price: "415.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Give-away",
    Currency: "USD",
    id: 10,
    name: "Apple AirPods",
    price: "235.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Give-away",
    Currency: "USD",
    id: 11,
    name: "Apple AirPods",
    price: "935.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },
  {
    tagid: "Give-away",
    Currency: "USD",
    id: 12,
    name: "Apple AirPods",
    price: "950.00",
    description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    imageUrl: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
  },

];

export function Cards({ selectedTag }) {

  const { addToCart } = useCart();

  const filteredProducts = selectedTag === "All Products"
    ? products
    : products.filter((product) => product.tagid === selectedTag);

  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
  {filteredProducts.map((product) => (
    <div key={product.id} className="flex flex-col bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden w-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden rounded-t-xl group">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-gray-800 text-lg font-bold">{product.name}</h3>
            <h2 className="text-gray-500 text-sm">{product.tagid}</h2>
          </div>
          <div className="flex">
            <p className="text-cyan-600 text-lg font-semibold ml-1">{product.Currency}</p>
            <p className="text-cyan-600 text-lg font-semiboldm ml-1">{product.price}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 px-4 bg-cyan-600 text-white rounded-md font-medium transition-colors duration-300 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800 disabled:opacity-50"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
  </div>
  );
}
