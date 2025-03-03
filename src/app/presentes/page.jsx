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

  const fetchGifts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api-casamento-mu.vercel.app/gifts"
      );
      setPresentesGanhos(response.data);
    } catch (error) {
      console.error("Erro ao buscar presentes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGifts();
  }, []);

  function getGiftNameById(id) {
    const gift = presentesGanhos.find((gift) => gift.giftid == id);

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
          𝐼 <span className="font-thin italic">+</span> 𝒢
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
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
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
                    <div className="bg-gray-300 h-4 w-3/4 mx-auto mt-2 rounded-md"></div>{" "}
                  </div>
                  <div className="bg-gray-300 h-8 w-full rounded-md mt-2"></div>{" "}
                </div>
              ))}
            </>
          )}
          {!loading && (
            <>
              {presentes
                .sort((a, b) => {
                  return getGiftNameById(a.id) - getGiftNameById(b.id);
                })
                .map((e) => (
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
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={e.link}
                        target="_blank"
                        className="bg-emerald-600 hover:bg-emerald-600/80 duration-300 text-white flex items-center justify-center uppercase text-xs"
                      >
                        Ver na Loja
                      </a>
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
                        } duration-300 text-white py-2 text-xs uppercase`}
                      >
                        {getGiftNameById(e.id) ? "Esgotado" : "presentear"}
                      </button>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <ModalConfirm
          reload={fetchGifts}
          isShowing={isOpen}
          hide={() => setIsOpen(false)}
          data={selectedPresent}
        />
      </div>
      <div className="text-gray-100 max-w-6xl mx-auto text-xl px-4 space-y-2 pb-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold flex gap-2 mx-auto items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
          </svg>
          Está em dúvida no que presentear??
        </h3>
        <p>Nos mande um PIX e ajude a realizarmos os nossos sonhos!</p>
        <div className="text-base text-violet-400 flex gap-2 items-center justify-center">
          <a
            href="https://wa.me/5538997368243"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            Isabella
          </a>
          <span>&</span>
          <a
            href="https://wa.me/5538998542256"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            Guilherme
          </a>
        </div>
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
