"use client";
import { Festa } from "@/components/Festa";
import { ListPresentes } from "@/components/ListPresentes";
import { Padrinhos } from "@/components/Padrinhos";
import { Sobre } from "@/components/Sobre";
import Head from "next/head";
import React from "react";
import { Link } from "react-scroll";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-black to-zinc-900">
      <div className="bg-[url('/bdNoText.png')] w-full bg-cover bg-right sm:bg-bottom py-8">
        <header className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <span className="text-5xl font-bold text-white">
            𝒢 <span className="font-thin italic">+</span> 𝐼
          </span>
          <nav>
            <ul className="gap-12 font-medium text-white text-xl hidden sm:flex">
              <li className="cursor-pointer">
                <Link
                  to="sobre"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Sobre
                </Link>
              </li>
              {/* <li className="cursor-pointer">
                <Link
                  to="Padrinhos"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Padrinhos
                </Link>
              </li> */}
              <li className="cursor-pointer">
                <Link
                  to="Presentes"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Lista de Presentes
                </Link>
              </li>
              {/*  <li className="cursor-pointer">
                <Link
                  to="Festa"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Festa
                </Link>
              </li> */}
            </ul>
          </nav>
        </header>
        <div
          className={`${dancingScript.className} flex flex-col justify-end items-end min-h-96 md:min-h-[600px] max-w-6xl mx-auto px-4`}
        >
          <p className="text-white text-5xl sm:text-8xl">
            Guilherme & Isabella
          </p>
          <p className="text-white text-xl sm:text-3xl">25/01/2025</p>
        </div>
      </div>
      <Sobre />
      {/* <Padrinhos /> */}
      <ListPresentes />
      {/*  <Festa /> */}
      <footer className="text-xs text-center text-white pb-2 flex justify-between items-center max-w-6xl mx-auto px-4">
        <p>Guarde nossa data!</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-balloon-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"
          />
        </svg>
        <p>25/01/2025</p>
      </footer>
    </main>
  );
}
