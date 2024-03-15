"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  BarController,
} from "chart.js";
import { PedidosDeliveryEntregados } from "./components/charts/PedidosDeliveryEntregados";
import { TiempoEntrega } from "./components/charts/TiempoEntrega";
import { TiempoPromedioEntrega } from "./components/charts/TiempoPromedioEntrega";
import { HoraPicoChart } from "./components/charts/HoraPicoPedidos";
import { Info } from "./components/Info";
import { Control } from "./components/Control";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  BarController
);

export default function Dashboard() {
  return (
    <div className="h-screen bg-blue-50 flex flex-col">
      <Control />
      <main
        className="p-6 grid gap-2 flex-1"
        style={{
          gridTemplateColumns: "2fr 1fr",
          gridTemplateRows: "minmax(300px,44vh) minmax(300px,44vh)",
        }}
      >
        <CardChart title="PEDIDOS DELIVERY ENTREGADOS">
          <PedidosDeliveryEntregados />
        </CardChart>
        <CardChart>
          <Info />
        </CardChart>
        <div className="grid grid-cols-2 gap-1">
          <CardChart title="TIEMPO DE ENTREGA (MIN)">
            <TiempoEntrega />
          </CardChart>
          <CardChart title="TIEMPO PROMEDIO ENTREGA">
            <TiempoPromedioEntrega />
          </CardChart>
        </div>
        <CardChart title="HORA PICO DE PEDIDOS">
          <HoraPicoChart />
        </CardChart>
      </main>
    </div>
  );
}

const CardChart = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="w-full bg-white p-4 rounded-md">
      <h3 className="mb-3 font-bold text-zinc-800">{title}</h3>
      {children}
    </div>
  );
};
