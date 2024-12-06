import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div>
        <footer className="min-h-10 max-h-24 w-full bg-neutral-100 dark:bg-zinc-900 flex gap-6 items-center justify-center border-zinc-900 mt-12">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to our social media →
        </a>
      </footer>
    </div>
  )
}
