import { Festa } from "@/components/Festa";
import { ListPresentes } from "@/components/ListPresentes";
import { Padrinhos } from "@/components/Padrinhos";
import { Sobre } from "@/components/Sobre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-black to-zinc-900">
      <div className="bg-[url('/bg.png')] w-full min-h-screen bg-cover bg-bottom">
        <header className="max-w-6xl mx-auto flex items-center justify-between py-8">
          <span className="text-5xl font-bold text-white">
            𝒢 <span className="font-thin italic">+</span> 𝐼
          </span>
          <nav>
            <ul className="flex gap-12 font-medium text-white text-xl">
              <li>Início</li>
              <li>Padrinhos</li>
              <li>Lista de Presentes</li>
              <li>Festa</li>
            </ul>
          </nav>
        </header>
      </div>
      <Sobre />
      <Padrinhos />
      <ListPresentes />
      <Festa />
    </main>
  );
}
