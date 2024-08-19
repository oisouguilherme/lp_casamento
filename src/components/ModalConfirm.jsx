"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

export function ModalConfirm({ isShowing, hide, data, reload }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    giftmethod: "",
    giftid: data?.id,
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setFormData({
      ...formData,
      giftid: data?.id,
    });
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(
        "https://api-casamento-dun.vercel.app/gifts",
        formData
      );

      if (response.status === 200) {
        toast.success("Obrigado pelo presente!");
        hide();
        reload();
      } else {
        toast.error("Erro ao escolher presente");
      }
    } catch (error) {
      console.error("Erro ao enviar presente:", error);
    } finally {
      setSending(false);
    }
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
              alt={data.nome}
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col text-sm gap-1">
                  <span>Telefone</span>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={formData.phone}
                    name="phone"
                    required
                    onChange={handleChange}
                    className="bg-gray-100 py-1 rounded-md px-2 text-black"
                    placeholder="Telefone"
                  />
                </label>
                <div className="flex flex-col text-sm gap-1 md:col-span-2">
                  <span>Forma de Presentear</span>
                  <select
                    name="giftmethod"
                    value={formData.giftmethod}
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
                  {sending ? "Confirmando" : "Confirmar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
