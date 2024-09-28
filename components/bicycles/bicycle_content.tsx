import { ContentProps } from "../../lib/myInterface";
import { useRef, useContext, useState, useEffect } from "react";
import { postCommentData, getCommentData } from "../../lib/function";
import { useRouter } from "next/router";
import NotificationContext from "../../store/notification-context";

interface comItem {
  _id: any;
  comContent: string;
  queryId: string;
}

export default function BicycleContent(props: ContentProps) {
  const { brand, model, color, price, performance, description, image, type } = props;
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [comData, setComData] = useState<comItem[]>();
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const allowComment = notificationCtx.isLogIn;
  const username = notificationCtx.userDetail?.data.username;

  const queryId = router.query.bicycleId;
  // const userSession = sessionStorage.getItem("_id");

  const comHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const comFormData = textRef.current?.value;
    postCommentData(username, comFormData, queryId);
  };

  const fetchComData = async (): Promise<void> => {
    const comItems = await getCommentData(setComData);
    const data = comItems.data.comItems;
    setComData(data);
    // console.log(comItems);
  };
  useEffect(() => {
    fetchComData();
  }, [comData]);

  return (
    <>
      <div className="my-0 mx-8 text-center">
        <h1 className="text-xl font-medium">{brand}</h1>
        <img src={image} alt={brand} className="my-0 mx-auto w-6/12 py-4" />
        <div className="w-10/12 my-0 mx-auto">
          <p>
            {color} {model} {type}
          </p>
          <p>{performance}</p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
        <div className="py-4">
          <hr className="my-0 mx-auto" />
          <div className="my-4">
            <h2 className="mb-2 text-xl font-medium text-slate-600">評論區</h2>
            {allowComment ? (
              <form onSubmit={comHandleSubmit}>
                <label htmlFor=""></label>
                <textarea
                  rows={5}
                  // cols={90}
                  ref={textRef}
                  name="comContent"
                  placeholder="請輸入文字..."
                  className="border-2 border-slate-400 border-solid rounded-md w-9/12 p-2"
                ></textarea>
                <div className="mt-2">
                  <button type="submit" className="w-20 border-2 border-slate-400 border-solid rounded-md">
                    送出
                  </button>
                </div>
              </form>
            ) : (
              <p className="mt-5 text-xl font-medium text-slate-800">登入後可進行評論</p>
            )}
          </div>
          <hr className="my-0 mx-auto" />
          <ul role="list" className="p-4 text-start">
            {comData?.map((d) =>
              d.queryId === queryId ? (
                <li key={d._id} className="border-2 border-slate-200 border-solid rounded-md p-4 mt-6">
                  <h4>用戶：{d._id}</h4>
                  <p>{d.comContent}</p>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
