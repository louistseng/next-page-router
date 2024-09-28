import BicycleList from "../../components/bicycles/bicycle_list";
import BicycleSearch from "../../components/bicycles/bicycle_search";
import { useRouter } from "next/router";
import { getBicycleData } from "../../lib/function";
import type { GetStaticProps } from "next";
import { PdProps } from "../../lib/myInterface";

export default function AllBicyclePage({ pdItems }: PdProps) {
  const router = useRouter();

  const findBicycleHandler = (year: string) => {
    const fullPath = `/bicycles/filter/${year}`;
    router.push(fullPath);
  };
  return (
    <>
      <BicycleSearch onSearch={findBicycleHandler} />
      <BicycleList item={pdItems} />
    </>
  );
}
export const getStaticProps: GetStaticProps<PdProps> = async () => {
  try {
    const pdItems = await getBicycleData();
    return {
      props: { pdItems: pdItems.data.pdItems },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { pdItems: [] },
    };
  }
};
