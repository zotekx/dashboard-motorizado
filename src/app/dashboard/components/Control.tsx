import { Button, ConfigProvider, DatePicker, Select } from "antd"
import dayjs from 'dayjs'
import es_ES from 'antd/locale/es_ES'
import 'dayjs/locale/es'
import {StyleProvider} from '@ant-design/cssinjs'

dayjs.locale('es')

const RangePicker=DatePicker.RangePicker
export const Control=()=>{
  return   <ConfigProvider locale={es_ES}>
    <StyleProvider hashPriority="high">
  <div className="mx-4 p-2 flex gap-2" style={{height:'4vh',minHeight:'50px'}}>
    <RangePicker 
      presets={[
        {
          label:'Ultimo mes',
          value: [dayjs().startOf('month'),dayjs()]
        }
      ]}
      onChange={(val:any)=>{
      const start=val[0]?.format("YYYY-MM-DD")
      const end =val[1]?.format("YYYY-MM-DD")
      console.log(start,end)
    }} />
    <Select placeholder="Tienda" className="w-52">
      <Select.Option value="Alcazar">Alcazar</Select.Option>
    </Select>
    <Button type="primary">Generar</Button>
  </div>
    </StyleProvider>
  </ConfigProvider>
}