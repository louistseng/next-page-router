import BicycleItem from "./bicycle_item";
import { Pditem } from "../../lib/myInterface";

interface BicycleListProps {
  item: Pditem[];
}
export default function BicycleList({ item }: BicycleListProps) {
  return (
    <div className="">
      {/* <div className="h-96">
        <img src="images/image_8.jpg" alt="" className="my-0 mx-auto rounded-sm" />
      </div> */}
      <div className="border-2 border-slate-200 border-solid rounded-xl truncate shadow m-8 mb-0 p-2 w-100">
        <h1>熱門消息：</h1>
        <div className="border-2 border-slate-200 border-solid rounded-xl truncate shadow p-2">img</div>
        <div className="border-2 border-slate-200 border-solid rounded-xl truncate shadow p-2">img</div>
        <div className="border-2 border-slate-200 border-solid rounded-xl truncate shadow p-2">img</div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {item.map((i) => (
          <BicycleItem
            key={i.Id}
            id={i.Id}
            brand={i.Brand}
            model={i.Model}
            image={i.ImageURL}
            type={i.Type}
            color={i.Color}
            price={i.Price}
            performance={i.Performance}
            description={i.Description}
            year={i.ProductionYear}
          />
        ))}
      </ul>
    </div>
  );
}
