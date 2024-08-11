"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function ModalConfirm({ isShowing, hide, data }) {
  const [formData, setFormData] = useState({
    nome: "",
    presente: "",
    formaPagamento: "",
  });

  useEffect(() => {
    setFormData({
      ...formData,
      presente: data?.nome,
    });
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, presente, formaPagamento } = formData;

    const message = `Eu, *${nome}* 
    \nGostaria de confirmar que vamos presentear vocês com: 
    \n*${presente}*
    \n\nEscolhi a forma de pagamento: *${formaPagamento}*.`;

    const whatsappUrl = `https://wa.me/5538998542256?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
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
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className="flex flex-col text-sm gap-1">
                  <span>Forma de Presentear</span>
                  <select
                    name="formaPagamento"
                    value={formData.formaPagamento}
                    onChange={handleChange}
                    className="bg-gray-100 py-1 rounded-md px-2"
                    required
                  >
                    <option value="">Selecionar</option>
                    <option value="Pix">Pix</option>
                    <option value="Comprar na Loja">Comprar na Loja</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-violet-700 hover:bg-violet-600 duration-300 text-white text-sm py-1 rounded-md uppercase sm:col-span-2 mt-3"
                >
                  Confirmar Presente via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
