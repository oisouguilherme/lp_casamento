import Image from "next/image";

export function Festa() {
  return (
    <div
      className="max-w-6xl mx-auto text-center py-12 text-white space-y-12"
      id="Festa"
    >
      <h2 className="font-bold text-4xl">Festa</h2>

      <p>
        NOSSA FELICIDADE É AINDA MAIOR QUANDO COMPARTILHADA! TE ESPERAMOS PARA
        CELEBRAR COM A GENTE!
      </p>

      <div className="bg-gray-100 p-12 text-zinc-900 space-y-10">
        <div className="grid grid-cols-3 text-start gap-8 items-center">
          <Image src={"/bg.png"} alt="oi" width={400} height={400} />
          <div className="col-span-2 space-y-3">
            <h3 className="text-4xl font-medium">Villa Bisutti</h3>
            <p>08 de fevereiro de 2024 às 18:00</p>
            <p>
              Preparem-se para a diversão! A festa será realizada na Villa
              Bisutti Casa do Ator após a cerimônia religiosa.
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15369.582347002037!2d-46.429703599999996!3d-15.62390925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935131a43d0c08c7%3A0x97d2eaee0bc308b9!2sHotel%20Central!5e0!3m2!1spt-BR!2sbr!4v1711214304597!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
