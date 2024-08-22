import Image from "next/image";
import Link from "next/link";
import presentes from "../components/presentes.json";
import { ModalConfirm } from "./ModalConfirm";
import { useEffect, useState } from "react";
import axios from "axios";

export function ListPresentes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPresent, setSelectedPresent] = useState(null);

  const [presentesGanhos, setPresentesGanhos] = useState([]);
  const [loading, setLoading] = useState(true);

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
            {Array.from({ length: 4 }, (_, index) => index).map((item) => (
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
            {presentes.slice(0, 4).map((e) => (
              <div
                onClick={() => {
                  !getGiftNameById(e.id) && setSelectedPresent(e);
                  !getGiftNameById(e.id) && setIsOpen(true);
                }}
                key={e.id}
                className="sm:w-56 bg-gray-100 p-2 text-zinc-800 flex flex-col justify-between text-center space-y-2"
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
