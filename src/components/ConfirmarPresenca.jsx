export function ConfirmarPresenca() {
  return (
    <div className="text-white max-w-6xl mx-auto pb-12 space-y-2">
      <h2 className="font-bold text-3xl sm:text-4xl text-violet-700 flex flex-col sm:flex-row items-center justify-center gap-2">
        Confirme sua presença
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
        </svg>
      </h2>
      <a
        href="https://forms.gle/d1wQCRU2ajsL8Pvt6"
        target="_blank"
        className="font-bold text-xl sm:text-2xl text-white flex flex-col sm:flex-row items-center justify-center gap-2 underline uppercase"
      >
        Clique Aqui
      </a>
    </div>
  );
}
