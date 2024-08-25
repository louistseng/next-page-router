import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BicycleContent from "../../components/bicycles/bicycle_content";
import { Pditem } from "../../lib/myInterface";
import { getBicycleData } from "../../lib/function";
import type { GetStaticProps } from "next";

export default function BicycleDetailPage() {
  const [pdData, setPbData] = useState<Pditem | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryId = router.query.bicycleId as string;

  const getData = async (queryId: string): Promise<void> => {
    setLoading(true);
    const pditems = await getBicycleData();
    const data = pditems.data.pditems.find((i: { Id: number }) => i.Id.toString() === queryId);
    setPbData(data);
    setLoading(false);
  };
  useEffect(() => {
    getData(queryId);
  }, [queryId]);
  return (
    <>
      {!pdData || loading ? (
        <p className="text-xl font-bold underline text-center">loading..</p>
      ) : (
        <BicycleContent
          id={pdData.Id}
          brand={pdData.Brand}
          model={pdData.Model}
          color={pdData.Color}
          price={pdData.Price}
          performance={pdData.Performance}
          description={pdData.Description}
          image={pdData.ImageURL}
          type={pdData.Type}
          year={pdData.ProductionYear}
        />
      )}
    </>
  );
}
