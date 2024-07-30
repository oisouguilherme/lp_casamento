"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

export function ModalConfirm({ isShowing, hide, data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [giftMethod, setGiftMethod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !giftMethod) {
      toast.error("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza de que deseja confirmar este presente?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await axios.post("https://api-casamento-alpha.vercel.app/gifts", {
                name,
                email,
                giftMethod,
                giftId: data.id,
              });
              toast.success("Presente confirmado com sucesso!");
              // Limpar o formulário ou redirecionar, se necessário
              setName("");
              setEmail("");
              setGiftMethod("");
              hide();
            } catch (error) {
              console.log(error);
              toast.error("Erro ao confirmar o presente. Tente novamente.");
            }
          },
        },
        {
          label: "Não",
          onClick: () => toast.info("Confirmação cancelada."),
        },
      ],
    });
  };
  return (
    isShowing && (
      <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl max-h-[80%] overflow-y-auto text-gray-950 mx-4">
          <div className="flex justify-between items-baseline gap-5 text-start">
            <h2 className="text-lg font-semibold">{data.nome}</h2>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={hide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 items-start mt-4">
            <Image
              src={data.imagem}
              alt={data.name}
              width={400}
              height={400}
              className="h-full max-h-64 object-contain"
            />
            <div className="text-start sm:col-span-2 space-y-2">
              <h3 className="font-semibold">
                Escolha a Forma de Presentear os Noivos
              </h3>
              <p className="text-xs">
                Envie um Pix no valor do presente para que os noivos escolham o
                que desejam, ou compre o presente diretamente no site e o envie
                para eles. Simples e prático!
              </p>
              <a
                href={data.link}
                target="_blank"
                className="text-violet-700 text-sm underline block cursor-pointer"
              >
                Confirmar valor no site
              </a>
              <form
                className="grid sm:grid-cols-2 gap-2"
                onSubmit={handleSubmit}
              >
                <span className="sm:col-span-2 font-semibold">
                  Confirme seu presente
                </span>
                <label className="flex flex-col text-sm gap-1">
                  <span>Nome</span>
                  <input
                    type="text"
                    className="bg-gray-100 py-1 rounded-md px-2"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="flex flex-col text-sm gap-1">
                  <span>E-mail</span>
                  <input
                    type="email"
                    className="bg-gray-100 py-1 rounded-md px-2"
                    placeholder="Seu e-mail"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <div className="flex flex-col text-sm gap-1 sm:col-span-2">
                  <span>Forma de Presentear</span>
                  <div className="grid grid-cols-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="giftMethod"
                        value="Mandar PIX"
                        checked={giftMethod === "Mandar PIX"}
                        onChange={(e) => setGiftMethod(e.target.value)}
                      />
                      <span>Mandar PIX</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="giftMethod"
                        value="Vou Comprar"
                        checked={giftMethod === "Vou Comprar"}
                        onChange={(e) => setGiftMethod(e.target.value)}
                      />
                      <span>Vou Comprar</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-violet-700 hover:bg-violet-600 duration-300 text-white text-sm py-1 rounded-md uppercase sm:col-span-2"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
