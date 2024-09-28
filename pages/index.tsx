import BicycleList from "../components/bicycles/bicycle_list";
import { getBicycleData } from "../lib/function";
import type { GetStaticProps } from "next";
import { PdProps } from "../lib/myInterface";
// import NotificationContext from "../store/notification-context";

export default function Home({ pdItems }: PdProps) {
  //   // const notificationCtx = useContext(NotificationContext)
  //   // let submit = async (e) => {
  //   //   fetchDataSubmit(notificationCtx)
  //   // };
  return (
    <>
      <BicycleList item={pdItems} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PdProps> = async () => {
  try {
    const pdItems = await getBicycleData();
    return {
      props: { pdItems: pdItems.data.pdItems.filter((i: { IsFeatured: boolean }) => i.IsFeatured) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { pdItems: [] },
    };
  }
};
