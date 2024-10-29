/* "use client";
import React from 'react'

const Cart = () => {
  return (
    <div className="max-w-md mx-auto bg-transparent backdrop-blur-md rounded-l-xl shadow-md h-auto w-auto m-2">
        cart is empthy!! | please add some items
    </div>
  )
}

export default Cart;


<div className="m-3 ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                  <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                    <button type="submit" aria-label="Reduce item quantity" class="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path>
                      </svg>
                    </button>
                    <p aria-live="polite" class="sr-only" role="status"></p>
                  </form>
                  <p class="w-6 text-center">
                    <span class="w-full text-sm">${}</span>
                  </p>
                  <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                    <button type="submit" aria-label="Increase item quantity" className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 dark:text-neutral-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                      </svg></button>
                      <p aria-live="polite" class="sr-only" role="status"></p>
                  </form>
                </div>

 */


'use client';

import Image from 'next/image';
import { useCart } from './cart-context'; 
import React from 'react'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col bg-transparent p-6 text-black dark:text-white md:w-[390px] rounded-l-3xl">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">My Cart</p>
      </div>

      {!cart.items.length ? (
        <div className="mt-20 flex flex-col items-center justify-center">
          <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <ul className="overflow-auto py-4">
            {cart.items.map((item) => (
              <li key={item.id} className="group flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      className="object-cover transform transition-transform duration-500 group-hover:scale-150"
                      alt={item.title}
                      src={item.imageUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                <div className="m-3 ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                  <button
                    type="button"
                    aria-label="Reduce item quantity"
                    className="flex h-full min-w-[36px] max-w-[36px] items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 dark:text-neutral-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>
                  <p className="w-6 text-center text-sm">{item.quantity}</p>
                  <button
                    type="button"
                    aria-label="Increase item quantity"
                    className="flex h-full min-w-[36px] max-w-[36px] items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 dark:text-neutral-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
                <div className="text-right">
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="py-4 border-t">
            <p className="text-lg font-semibold">
            Total Items: {cart.totalQuantity} | Total: ${cart.totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="py-4 border-t">
            <p className="text-lg font-semibold">
            <button
              className="w-full py-2 px-4 bg-cyan-600 text-white rounded-md font-medium transition-colors duration-300 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800 disabled:opacity-50"
              type="button"
            >
              Checkout
            </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

