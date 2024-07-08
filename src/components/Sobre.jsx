import Image from "next/image";

export function Sobre() {
  return (
    <div
      id="sobre"
      className="max-w-7xl px-4 sm:px-12 mx-auto text-center py-12 text-gray-100 space-y-12"
    >
      <h2 className="font-bold text-2xl sm:text-4xl text-violet-700 flex flex-col sm:flex-row items-center justify-center gap-2">
        Sejam bem-vindos ao nosso site!
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"
            />
          </svg>
        </div>
      </h2>

      <p>
        A MELHOR FORMA DE COMPARTILHAR ESSE MOMENTO COM VOCÊS É VIVENDO JUNTOS
        ESSE SONHO!
      </p>

      <p>
        Aqui vamos contar à vocês, queridos amigos e familiares, os momentos
        mais marcantes da nossa história de amor. A contagem regressiva começa,
        o frio na barriga e toda a ansiedade do dia mais esperado de nossas
        vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse
        grande sonho, o dia em que uniremos nossas almas e corpos para sempre, o
        dia do nosso casamento.
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        <Image
          src={"/bg.png"}
          alt="oi"
          width={400}
          height={400}
          className="shadow-violet-700 shadow-lg"
        />
        <Image
          src={"/bg.png"}
          alt="oi"
          width={400}
          height={400}
          className="shadow-violet-700 shadow-lg"
        />
        <Image
          src={"/bg.png"}
          alt="oi"
          width={400}
          height={400}
          className="shadow-violet-700 shadow-lg"
        />
      </div>
    </div>
  );
}
