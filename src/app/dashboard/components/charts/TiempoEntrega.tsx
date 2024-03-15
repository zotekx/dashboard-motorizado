import { Bar } from "react-chartjs-2";

export const TiempoEntrega = () => {
  const repartidores = [
    "Gonzalo falcon",
    "Israel saravia",
    "Pedro Rivas",
    "Jose Rivas",
    "Gonzalo falcon",
  ];
  const labels = repartidores;
  const data = {
    labels,
    datasets: [
      {
        label: "Tiempo de entrega",
        data: [10031, 313, 3992, 3992, 3992],
        barThickness: 10,
        backgroundColor: "rgba(1,98,255,1)",
        borderRadius: 30,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    plugins: {
      title: {
        text: "TIEMPO DE ENTREGA (MIN)",
        display: true,
        color: "#161D37",
        align: "start" as const,
        font: {
          size: 17,
        },
      },
      legend: {
        display: false,
        title: {
          display: true,
          text: "Repartidores",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
