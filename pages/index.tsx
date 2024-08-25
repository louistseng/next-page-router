import BicycleList from "../components/bicycles/bicycle_list";
import { getBicycleData } from "../lib/function";
import type { GetStaticProps } from "next";
import { PdProps } from "../lib/myInterface";
// import NotificationContext from "../store/notification-context";

export default function Home({ pditems }: PdProps) {
  //   // const notificationCtx = useContext(NotificationContext)
  //   // let submit = async (e) => {
  //   //   fetchDataSubmit(notificationCtx)
  //   // };
  return <BicycleList item={pditems} />;
}

export const getStaticProps: GetStaticProps<PdProps> = async () => {
  try {
    const pditems = await getBicycleData();
    return {
      props: { pditems: pditems.data.pditems.filter((i: { IsFeatured: boolean }) => i.IsFeatured) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { pditems: [] },
    };
  }
};
