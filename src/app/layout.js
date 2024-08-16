import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Isabella & Guilherme",
  description: "A MELHOR FORMA DE COMPARTILHAR ESSE MOMENTO COM VOCÊS É VIVENDO JUNTOS ESSE SONHO!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}><ToastContainer />{children}</body>
    </html>
  );
}
