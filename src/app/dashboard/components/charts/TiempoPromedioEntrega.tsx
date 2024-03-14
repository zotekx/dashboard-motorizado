import { Bar } from "react-chartjs-2"

export const TiempoPromedioEntrega=()=>{
  const repartidores=["Gonzalo falcon","Israel saravia","Pedro Rivas"]
  const labels=repartidores
  const data={
    labels,
    datasets:[{
      label: 'Tiempo de entrega',
      data: [10031,313,3992],
      barThickness:10,
      backgroundColor:"rgba(1,98,255,1)",
      borderRadius:30,
    }]
  }

  const options={
    indexAxis: 'y'  as const,
    plugins: {
      legend: {
        display:false
      }
    }
  }

  return <Bar data={data} options={options} />
}