"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import presentes from "../../components/presentes.json";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulação de autenticação. Troque pelo endpoint real se necessário.
      if (username === "admin" && password === "Senha@1234") {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Usuário ou senha incorretos");
      }
    } catch (error) {
      setError("Erro ao tentar fazer login");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchGifts = async () => {
        try {
          const response = await axios.get(
            "https://api-casamento-mu.vercel.app/gifts"
          );
          setGifts(response.data);
        } catch (error) {
          console.error("Erro ao buscar presentes:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchGifts();
    }
  }, [isAuthenticated]);

  function getGiftNameById(id) {
    const gift = presentes.find((gift) => gift.id == id);
    return gift ? gift.nome : null;
  }
  function getGiftImageById(id) {
    const gift = presentes.find((gift) => gift.id == id);
    return gift ? gift.imagem : null;
  }
  return (
    <div className="p-6">
      {!isAuthenticated ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-md shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium mb-1">Usuário</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md px-3 py-2"
                required
              />
            </div>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Entrar
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Lista de Presentes</h1>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nome</th>
                  <th className="border px-4 py-2">Telefone</th>
                  <th className="border px-4 py-2">Tipo</th>
                  <th className="border px-4 py-2">Presente</th>
                  <th className="border px-4 py-2">Imagem</th>
                </tr>
              </thead>
              <tbody>
                {gifts.map((gift) => (
                  <tr key={gift.id}>
                    <td className="border px-4 py-2">{gift.name}</td>
                    <td className="border px-4 py-2">{gift.phone}</td>
                    <td className="border px-4 py-2">{gift.giftmethod}</td>
                    <td className="border px-4 py-2">
                      {getGiftNameById(gift.giftid)}
                    </td>
                    <td className="border px-4 py-2">
                      <img
                        src={getGiftImageById(gift.giftid)}
                        className="w-24"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
