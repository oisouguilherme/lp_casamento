import Image from "next/image";
import Link from "next/link";
import presentes from "../components/presentes.json";
import { ModalConfirm } from "./ModalConfirm";
import { useState } from "react";

export function ListPresentes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPresent, setSelectedPresent] = useState(null);

  return (
    <div
      className="max-w-6xl mx-auto text-center px-4 py-12 text-white space-y-12 flex flex-col items-center"
      id="Presentes"
    >
      <h2 className="font-bold text-3xl sm:text-4xl text-violet-700 flex flex-col sm:flex-row items-center justify-center gap-2">
        Lista de Presentes
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
            <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
          </svg>
        </div>
      </h2>
      <p className="text-sm sm:text-base">
        QUERIDOS FAMILIARES E AMIGOS, PARA NÓS, A PRESENÇA DE VOCÊS NESTE DIA
        TÃO ESPECIAL É O MAIOR PRESENTE QUE PODERÍAMOS RECEBER. MAS, SE VOCÊS
        TAMBÉM QUISEREM NOS PRESENTEAR, FICAREMOS MUITO AGRADECIDOS. COM AMOR,
        ISABELLA E GUILHERME.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
        {presentes.slice(0, 4).map((e) => (
          <div
            className="md:w-56 bg-gray-100 p-2 text-zinc-800 flex flex-col justify-between text-center space-y-2"
            key={e.id}
          >
            <div className="flex flex-col justify-between text-sm space-y-2">
              <div className="bg-white">
                <Image
                  src={e.imagem}
                  alt="oi"
                  width={400}
                  height={400}
                  className="h-56 object-contain"
                />
              </div>
              <span>{e.nome}</span>
            </div>
            <button
              onClick={() => {
                setSelectedPresent(e);
                setIsOpen(true);
              }}
              className="bg-violet-950 hover:bg-violet-900 duration-300 text-white py-2 text-sm uppercase"
            >
              presentear
            </button>
          </div>
        ))}
        <ModalConfirm
          isShowing={isOpen}
          hide={() => setIsOpen(false)}
          data={selectedPresent}
        />
      </div>
      <Link
        href={"/presentes"}
        className="bg-violet-950 hover:bg-violet-900 duration-300 text-white font-medium py-2 max-w-sm w-full uppercase rounded-lg"
      >
        Ver mais
      </Link>
    </div>
  );
}
