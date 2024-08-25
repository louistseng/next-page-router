import classes from "./bicycle_item.module.css";
import Button from "../ui/button.js";
import { ItemProps } from "../../lib/myInterface";

export default function BicycleItem(props: ItemProps) {
  const { id, brand, model, image, type } = props;

  return (
    <li className={classes.item}>
      <img src={image} alt={brand} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className={classes.h2}>{model}</h2>
        </div>
        <div className={classes.contentText}>{brand}</div>
        <div className={classes.contentText}>{type}</div>
        <div className={classes.buttonDiv}>
          <Button link={`/bicycles/${id}`}>
            <span>詳細信息</span>
            <span></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
