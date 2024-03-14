



import { Line } from 'react-chartjs-2';

// Datos y opciones para el gráfico
const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // eje X
  datasets: [
    {
      label: 'Pedidos registrados',
      data: [65, 59, 80, 81, 56], // los puntos en el eje Y
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      // Agrega los siguientes para habilitar los puntos (marcadores)
      pointBorderColor: 'rgb(75, 192, 192)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(75, 192, 192)',
      pointHoverBorderColor: 'rgb(220,220,220)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
    },
    {
      label: 'Pedidos asignados',
      data: [35, 29, 78, 31, 36],
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
    },
    {
      label:'Pedidos entregados',
      data: [ 65, 59, 60, 81, 56],
    }
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  // Añade animaciones, si deseas
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear' as const,
      from: 0.3,
      to: 0.1,
      loop: true,
    },
  },
};

export function HoraPicoChart() {
  return <Line data={data} options={options} />
}
