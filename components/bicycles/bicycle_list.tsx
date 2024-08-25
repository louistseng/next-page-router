import BicycleItem from "./bicycle_item";
import { Pditem } from "../../lib/myInterface";

interface BicycleListProps {
  item: Pditem[];
}
export default function BicycleList({ item }: BicycleListProps) {
  const styled = {
    display: "grid",
    height: "20%",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    gap: "2px 2px",
  };
  return (
    <ul style={styled}>
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
  );
}
