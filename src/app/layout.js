import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

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
