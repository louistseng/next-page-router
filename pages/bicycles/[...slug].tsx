import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BicycleList from "../../components/bicycles/bicycle_list";
import BicycleSearch from "../../components/bicycles/bicycle_search";
import { getBicycleData } from "../../lib/function";
import { Pditem } from "../../lib/myInterface";
import { LoadingOutlined } from "@ant-design/icons";

export default function FilteredBicyclePage() {
  const router = useRouter();
  const [pdSlugData, setPbSlugData] = useState<Pditem[]>([]);
  const [loading, setLoading] = useState(false);
  const filterData = router.query.slug as string[] | undefined;
  const filterYear: string = filterData?.[1] ?? "";

  const getData = async (filterYear: string): Promise<void> => {
    setLoading(true);
    const pdItems = await getBicycleData();
    const data = pdItems.data.pdItems.filter(
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
        <p className="center">
          <LoadingOutlined />
          loading...
        </p>
      ) : (
        <>
          {pdSlugData.length === 0 ? <p className="center">未查到相關結果！</p> : ""}
          <BicycleList item={pdSlugData} />
        </>
      )}
    </div>
  );
}
