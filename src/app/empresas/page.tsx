import Image from "next/image";

export default function EnterprisePage() {
  return (
    <main>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/empresa.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-64 text-white">
        <h1>Pagina para empresas</h1>
        <h2>Próximamente</h2>
      </div>
    </main>
  );
}
