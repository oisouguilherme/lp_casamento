"use client";
import { useState } from "react";

export function ConfirmarPresenca() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;

    const data = `Olá, Noivos! \nEu, *${name}*, estou confirmando minha presença no casamento \n\nMensagem: \n${message}`;

    const whatsappUrl = `https://wa.me/5538998542256?text=${data}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="text-white max-w-6xl mx-auto pb-12">
      <h2 className="font-bold text-3xl sm:text-4xl text-violet-700 flex flex-col sm:flex-row items-center justify-center gap-2">
        Confirme sua presença
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="gap-5 p-5 text-gray-50 flex flex-col"
        >
          <label className="flex flex-col gap-1">
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-100 rounded-md py-2 px-5 text-black"
              placeholder="Seu nome"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Mensagem:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-100 rounded-md py-2 px-5 resize-none h-28 text-black"
              placeholder="Opcional"
            />
          </label>
          <button
            type="submit"
            className="bg-violet-700 hover:bg-violet-800 duration-300 py-2 text-white sm:col-span-2 rounded-md"
          >
            Confirmar Presença
          </button>
        </form>
      </div>
    </div>
  );
}
