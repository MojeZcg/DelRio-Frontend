import { Lightbulb, MapPinned } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MapPinned,
    title: "Siempre cerca tuyo",
    description: "Tenemos base operativa a minutos de tu domicilio.",
  },
  {
    icon: Lightbulb,
    title: "Planes ideales para vos",
    description: "Ofrecemos servicios pensados para cada usuario.",
  },
  {
    icon: MapPinned,
    title: "Atención multicanal",
    description: "Expertos listos para resolver tu consulta.",
  },
  {
    icon: MapPinned,
    title: "Calidad inigualable",
    description: "Vos viví, nosotros nos encargamos del resto.",
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex h-46 max-w-78 flex-col items-center gap-4 rounded-2xl border border-gray-300 p-6 shadow-sm shadow-gray-200">
      <Icon size={48} className="text-blue-600" />
      <div className="text-center">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-black/60">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-center gap-36 py-64">
        <div className="flex flex-col items-start gap-8">
          <div className="">
            <h1 className="mt-8 text-4xl font-bold">
              Tu conexión al mundo, más humana que nunca.
            </h1>
            <p className="mt-4 text-base">
              Conectamos tu hogar con la velocidad y estabilidad que merecés.
            </p>
          </div>
          <Link href="/" className="rounded-xl border bg-blue-500 px-4 py-3">
            Conocé nuestros planes
          </Link>
        </div>
      </div>
      <section className="flex flex-row items-center justify-center gap-16 bg-white py-16 text-black">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </section>
    </>
  );
}
