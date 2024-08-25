import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BicycleList from "../../components/bicycles/bicycle_list";
import BicycleSearch from "../../components/bicycles/bicycle_search";
import { getBicycleData } from "../../lib/function";
import { Pditem } from "../../lib/myInterface";

export default function FilteredBicyclePage() {
  const router = useRouter();
  const [pdSlugData, setPbSlugData] = useState<Pditem[]>([]);
  const [loading, setLoading] = useState(false);
  const filterData = router.query.slug as string[] | undefined;
  const filterYear: string = filterData?.[1] ?? "";

  const getData = async (filterYear: string): Promise<void> => {
    setLoading(true);
    const pditems = await getBicycleData();
    const data = pditems.data.pditems.filter(
      (i: { ProductionYear: number }) => i.ProductionYear.toString() === filterYear
    );
    setPbSlugData(data);
    setLoading(false);
  };

  const findBicycleHandler = (year: string) => {
    const fullPath = `/bicycles/filter/${year}`;
    router.push(fullPath);
  };

  useEffect(() => {
    getData(filterYear);
  }, [filterYear]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}></h1>
      <BicycleSearch onSearch={findBicycleHandler} />
      {loading ? (
        <p className="center">loading...</p>
      ) : (
        <>
          {pdSlugData.length === 0 ? <p className="center">未查到相關結果！</p> : ""}
          <BicycleList item={pdSlugData} />
        </>
      )}
    </div>
  );
}
