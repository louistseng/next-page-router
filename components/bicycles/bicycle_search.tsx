import { useRef } from "react";
import Button from "../ui/button";
import classes from "./bicycle_search.module.css";

interface BicycleSearchProps {
  onSearch: (query: string) => void;
}
const BicycleSearch: React.FC<BicycleSearchProps> = ({ onSearch }) => {
  const yearRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectYear = yearRef.current?.value || "";
    onSearch(selectYear);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.search}>
        <div className={classes.selectBtn}>
          <label htmlFor="year">年份</label>
          <select id="year" ref={yearRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <Button>Find Bicycles</Button>
      </div>
    </form>
  );
};
export default BicycleSearch;
