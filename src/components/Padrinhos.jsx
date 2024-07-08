import Image from "next/image";

export function Padrinhos() {
  return (
    <div
      className="max-w-6xl mx-auto text-center py-12 text-white space-y-12"
      id="Padrinhos"
    >
      <h2 className="font-bold text-4xl text-violet-700 flex gap-2 justify-center">
        Padrinhos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
          />
        </svg>
      </h2>
      <p>
        AQUI ESTÃO AS PESSOAS QUE VÃO FAZER O NOSSO DIA AINDA MAIS ESPECIAL.
      </p>

      <h2 className="font-semibold text-3xl text-violet-700">
        Padrinhos da Noiva
      </h2>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row gap-5 text-start items-center bg-zinc-900 shadow-lg shadow-zinc-800 rounded-3xl p-5 max-w-4xl mx-auto">
          <Image
            src={"/bg.png"}
            alt="oi"
            width={400}
            height={400}
            className="rounded-full object-cover w-48 h-48"
          />
          <div className="space-y-4">
            <h3 className="text-4xl font-medium">Pedro Ribeiro</h3>
            <p>
              Sempre presente com muito bom humor e, acima de tudo, um ótimo
              amigo, o Pedro com certeza não ficaria de fora da nossa lista de
              padrinhos.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-start items-center bg-zinc-900 shadow-lg shadow-zinc-800 rounded-3xl p-5 max-w-4xl mx-auto">
          <Image
            src={"/bg.png"}
            alt="oi"
            width={400}
            height={400}
            className="rounded-full object-cover w-48 h-48"
          />
          <div className="space-y-4">
            <h3 className="text-4xl font-medium">Pedro Ribeiro</h3>
            <p>
              Sempre presente com muito bom humor e, acima de tudo, um ótimo
              amigo, o Pedro com certeza não ficaria de fora da nossa lista de
              padrinhos.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-3xl text-violet-700">
        Padrinhos do Noivo
      </h2>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row gap-5 text-start items-center bg-zinc-900 shadow-lg shadow-zinc-800 rounded-3xl p-5 max-w-4xl mx-auto">
          <Image
            src={"/bg.png"}
            alt="oi"
            width={400}
            height={400}
            className="rounded-full object-cover w-48 h-48"
          />
          <div className="space-y-4">
            <h3 className="text-4xl font-medium">Pedro Ribeiro</h3>
            <p>
              Sempre presente com muito bom humor e, acima de tudo, um ótimo
              amigo, o Pedro com certeza não ficaria de fora da nossa lista de
              padrinhos.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-start items-center bg-zinc-900 shadow-lg shadow-zinc-800 rounded-3xl p-5 max-w-4xl mx-auto">
          <Image
            src={"/bg.png"}
            alt="oi"
            width={400}
            height={400}
            className="rounded-full object-cover w-48 h-48"
          />
          <div className="space-y-4">
            <h3 className="text-4xl font-medium">Pedro Ribeiro</h3>
            <p>
              Sempre presente com muito bom humor e, acima de tudo, um ótimo
              amigo, o Pedro com certeza não ficaria de fora da nossa lista de
              padrinhos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
