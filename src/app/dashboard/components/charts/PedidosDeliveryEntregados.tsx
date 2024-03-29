import {
  BarControllerChartOptions,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const PedidosDeliveryEntregados = () => {
  const diasTrabajados = ["01", "02", "03", "04", "05", "06"];
  const data = {
    labels: diasTrabajados,
    datasets: [
      {
        label: "Total de pedidos",
        borderRadius: 30,
        data: [139, 1668, 2418, 744, 784, 800],
        backgroundColor: "rgba(32,214,155,1)",
        barThickness: 10,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        text: "PEDIDOS DELIVERY ENTREGADOS",
        display: true,
        color: "#161D37",
        align: "start" as const,
        font: {
          size: 16,
        },
      },
      legend: {
        display: false,
        position: "top" as const,
        // align: "start" as const,
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawTicks: false,
        },
      },
      xAxis: {
        display: true,
      },
    },
  };

  return <Bar data={data} options={options} style={{}} />;
};
