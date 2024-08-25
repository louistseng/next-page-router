import BicycleList from "../../components/bicycles/bicycle_list";
import BicycleSearch from "../../components/bicycles/bicycle_search";
import { useRouter } from "next/router";
import { getBicycleData } from "../../lib/function";
import type { GetStaticProps } from "next";
import { PdProps } from "../../lib/myInterface";

export default function AllBicyclePage({ pditems }: PdProps) {
  const router = useRouter();

  const findBicycleHandler = (year: string) => {
    const fullPath = `/bicycles/filter/${year}`;
    router.push(fullPath);
  };
  return (
    <>
      <BicycleSearch onSearch={findBicycleHandler} />
      <BicycleList item={pditems} />
    </>
  );
}
export const getStaticProps: GetStaticProps<PdProps> = async () => {
  try {
    const pditems = await getBicycleData();
    return {
      props: { pditems: pditems.data.pditems },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { pditems: [] },
    };
  }
};
