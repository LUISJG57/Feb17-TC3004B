export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-[calc(100vh-64px)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Texto
        </h1>
        <h2 className="text-xl text-center sm:text-left">
          SubTexto
        </h2>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md self-center sm:self-start">
          Hola
        </button>
      </main>
    </div>
  );
}