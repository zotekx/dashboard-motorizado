export const Info=()=>{
  const info:Array<{amount:string,text:string}>=[{
    amount:"5,000",
    text:"TOTAL PEDIDOS ENTREGADOS"
  },{
    amount:"10",
    text:"PROMEDIO DIARIO"
  },
  {
    amount: "13",
    text:"DIAS TRABAJO"
  },
  {
    amount: "13",
    text:"PROMEDIO ENTREGA(MIN)"
  },
  {
    amount: "13",
    text:"CANTIDAD ANULADOS"
  }
]
  return <div className="grid grid-cols-2 gap-4" style={{height:'min-content'}}>
    {
      info.map(el=><CardInfo key={el.text} amount={el.amount} text={el.text}/>)
    }
  </div>
}

const CardInfo=({amount,text}:{amount:string,text:string})=>{
  return <div className="flex items-center justify-center gap-2 border border-solid border-indigo-200 py-4 px-6 rounded-md h-24">
    <span className="text-3xl font-bold">{amount}</span>
    <span className="text-gray-500 font-bold text-sm" style={{width:'min-content'}} >{text}</span>
  </div>
}