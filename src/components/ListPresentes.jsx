import Image from "next/image";

export function ListPresentes() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 text-white space-y-12">
      <h2 className="font-bold text-4xl text-violet-700 flex items-center justify-center gap-2">
        Lista de casamento
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
      </h2>
      <p>
        QUERIDOS FAMILIARES E AMIGOS, PARA NÓS, A PRESENÇA DE VOCÊS NESTE DIA
        TÃO ESPECIAL É O MAIOR PRESENTE QUE PODERÍAMOS RECEBER. MAS, SE VOCÊS
        TAMBÉM QUISEREM NOS PRESENTEAR, FICAREMOS MUITO AGRADECIDOS. COM AMOR,
        MARI E DUDU.
      </p>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="w-56 bg-gray-100 p-4 text-zinc-800 text-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="flex flex-col text-sm space-y-4 mt-4">
            <span>Adega de vinhos digital - 28 garrafas</span>
            <span className="text-lg font-bold">R$ 1.039,39</span>
            <button className="bg-violet-950 text-white text-xl font-medium py-2">
              Comprar
            </button>
          </div>
        </div>
        <div className="w-56 bg-gray-100 p-4 text-zinc-800 text-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="flex flex-col text-sm space-y-4 mt-4">
            <span>Adega de vinhos digital - 28 garrafas</span>
            <span className="text-lg font-bold">R$ 1.039,39</span>
            <button className="bg-violet-950 text-white text-xl font-medium py-2">
              Comprar
            </button>
          </div>
        </div>
        <div className="w-56 bg-gray-100 p-4 text-zinc-800 text-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="flex flex-col text-sm space-y-4 mt-4">
            <span>Adega de vinhos digital - 28 garrafas</span>
            <span className="text-lg font-bold">R$ 1.039,39</span>
            <button className="bg-violet-950 text-white text-xl font-medium py-2">
              Comprar
            </button>
          </div>
        </div>
        <div className="w-56 bg-gray-100 p-4 text-zinc-800 text-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="flex flex-col text-sm space-y-4 mt-4">
            <span>Adega de vinhos digital - 28 garrafas</span>
            <span className="text-lg font-bold">R$ 1.039,39</span>
            <button className="bg-violet-950 text-white text-xl font-medium py-2">
              Comprar
            </button>
          </div>
        </div>
        <div className="w-56 bg-gray-100 p-4 text-zinc-800 text-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="flex flex-col text-sm space-y-4 mt-4">
            <span>Adega de vinhos digital - 28 garrafas</span>
            <span className="text-lg font-bold">R$ 1.039,39</span>
            <button className="bg-violet-950 text-white text-xl font-medium py-2">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <button className="bg-violet-950 text-white text-lg font-medium py-2 max-w-sm w-full uppercase">
        Ver mais
      </button>
    </div>
  );
}
