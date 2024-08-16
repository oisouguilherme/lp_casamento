"use client";
import Image from "next/image";
import presentes from "../../components/presentes.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModalConfirm } from "@/components/ModalConfirm";
import axios from "axios";

export default function Presentes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPresent, setSelectedPresent] = useState(null);
  const [presentesGanhos, setPresentesGanhos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api-casamento-dun.vercel.app/gifts"
        );
        setPresentesGanhos(response.data);
      } catch (error) {
        console.error("Erro ao buscar presentes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifts();
  }, []);

  function getGiftNameById(id) {
    const gift = presentesGanhos.find(
      (gift) => gift.giftid == id && gift.giftmethod == "Comprar na Loja"
    );

    if (gift) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="bg-gradient-to-tr from-black to-zinc-900 px-4">
      <header className="max-w-6xl mx-auto flex items-center justify-between px-4 pt-8">
        <Link href={"/"} className="text-3xl sm:text-5xl font-bold text-white">
          𝒢 <span className="font-thin italic">+</span> 𝐼
        </Link>
      </header>
      <div className="max-w-6xl mx-auto text-center py-5 sm:py-12 text-white gap-12 flex flex-col items-center">
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
          {loading && (
            <>
              {Array.from({ length: 10 }, (_, index) => index).map((item) => (
                <div
                  key={item}
                  className="w-56 bg-gray-100 p-2 text-zinc-800 flex flex-col justify-between text-center space-y-2 animate-pulse"
                >
                  <div className="flex flex-col justify-between text-sm space-y-2">
                    <div className="bg-gray-300 h-56 w-full rounded-md"></div>{" "}
                    {/* Placeholder for image */}
                    <div className="bg-gray-300 h-4 w-3/4 mx-auto mt-2 rounded-md"></div>{" "}
                    {/* Placeholder for name */}
                  </div>
                  <div className="bg-gray-300 h-8 w-full rounded-md mt-2"></div>{" "}
                  {/* Placeholder for button */}
                </div>
              ))}
            </>
          )}
          {!loading && (
            <>
              {presentes.map((e) => (
                <div className="sm:w-56 bg-gray-100 p-2 text-zinc-800 flex flex-col justify-between text-center space-y-2">
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
                    disabled={getGiftNameById(e.id)}
                    className={`${
                      getGiftNameById(e.id)
                        ? "bg-red-500 cursor-not-allowed"
                        : "bg-violet-950 hover:bg-violet-900"
                    } duration-300 text-white py-2 text-sm uppercase`}
                  >
                    {getGiftNameById(e.id) ? "Esgotado" : "presentear"}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
        <ModalConfirm
          isShowing={isOpen}
          hide={() => setIsOpen(false)}
          data={selectedPresent}
        />
      </div>
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
            fillRule="evenodd"
            d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"
          />
        </svg>
        <p>25/01/2025</p>
      </footer>
    </div>
  );
}
