"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Admin() {
  const [convidados, setConvidados] = useState([]);
  const [gifts, setGifts] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      setIsLogged(true);
      toast.success("Login realizado com sucesso!");
    } else {
      setIsLogged(false);
      toast.error("Credenciais incorretas.");
    }
  };

  useEffect(() => {
    if (isLogged) {
      getListaConvidados();
    }
  }, [isLogged]);

  async function getListaConvidados() {
    try {
      const resGifts = await axios.get(
        "https://api-casamento-alpha.vercel.app/gifts"
      );
      const resConfirm = await axios.get(
        "https://api-casamento-alpha.vercel.app/confirmations"
      );

      if (resGifts.status === 200) {
        setGifts(resGifts.data);
      }
      if (resConfirm.status === 200) {
        setConvidados(resConfirm.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLogged ? (
        <div className="bg-zinc-950 min-h-screen flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col gap-3 bg-gray-100 max-w-sm w-full p-4 rounded-md">
            <h2>Lista de Convidados</h2>
            {convidados.map((e) => (
              <div>teste</div>
            ))}
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 max-w-sm w-full p-4 rounded-md">
            <h2>Lista de Presentes</h2>
            {gifts.map((e) => (
              <div>teste</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-950 min-h-screen flex justify-center items-center">
          <div className="flex flex-col gap-3 bg-gray-100 max-w-sm w-full p-4 rounded-md">
            <h2 className="text-2xl font-bold text-center">Fazer Login</h2>
            <input
              type="text"
              placeholder="Usúario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-800 px-5 py-2 rounded-md text-white"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-800 px-5 py-2 rounded-md text-white"
            />
            <button
              className="bg-zinc-900 hover:bg-zinc-800 duration-300 text-white uppercase py-2 rounded-md"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
