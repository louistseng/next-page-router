import Button from "../ui/button.js";
import { ItemProps } from "../../lib/myInterface";
import { FireOutlined } from "@ant-design/icons";

export default function BicycleItem(props: ItemProps) {
  const { id, brand, model, image, type } = props;
  return (
    <li className="border-2 border-slate-200 border-solid rounded-xl truncate shadow m-8">
      <div className="p-6 h-48 overflow-hidden">
        <img src={image} alt={brand} className="w-9/12 my-0 mx-auto" />
      </div>
      <div className="p-2 h-20">
        <div className="flex justify-start text-xs text-slate-600 uppercase font-bold tracking-wider">
          <p className="border-2 border-slate-500 border-solid rounded-md p-1">{brand}</p>
          <p className="border-2 border-slate-500 border-solid rounded-md p-1 mx-2">{type}</p>
        </div>
        <div className="font-bold text-slate-700 leading-snug">
          <a href="url" className="hover:underline">
            {model}
          </a>
        </div>
        <FireOutlined />
      </div>
      <div className="h-10 m-2 font-bold text-slate-700 leading-snug">
        <Button link={`/bicycles/${id}`}>
          <span>加入話題</span>
          <span></span>
        </Button>
      </div>
    </li>
  );
}
