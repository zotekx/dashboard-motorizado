import { Button, ConfigProvider, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import es_ES from "antd/locale/es_ES";
import "dayjs/locale/es";
import { StyleProvider } from "@ant-design/cssinjs";
import { useRouter } from "next/navigation";

dayjs.locale("es");

const RangePicker = DatePicker.RangePicker;

export const Control = () => {
  const router = useRouter();
  const closeSession = () => {
    router.push("/login");
  };

  return (
    <ConfigProvider locale={es_ES}>
      <StyleProvider hashPriority="high">
        <div
          className="flex justify-between p-2 gap-2 mx-4 items-center"
          style={{ height: "4vh", minHeight: "50px" }}
        >
          <div className="flex gap-2">
            <RangePicker
              allowClear={false}
              presets={[
                {
                  label: "Ultimo mes",
                  value: [dayjs().startOf("month"), dayjs()],
                },
              ]}
              onChange={(val: any) => {
                const start = val[0]?.format("YYYY-MM-DD");
                const end = val[1]?.format("YYYY-MM-DD");
                console.log(start, end);
              }}
            />
            <Select placeholder="Tienda" className="w-52">
              <Select.Option value="Alcazar">Alcazar</Select.Option>
              <Select.Option value="Benavides">Benavides</Select.Option>
              <Select.Option value="Vip">Vipol</Select.Option>
            </Select>
            <Button type="primary">Generar</Button>
          </div>
          <div>
            <a
              href="#"
              onClick={closeSession}
              className="text-blue-500 font-bold hover:underline"
            >
              Cerrar sesion
            </a>
          </div>
        </div>
      </StyleProvider>
    </ConfigProvider>
  );
};
