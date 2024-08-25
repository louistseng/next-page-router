import { ContentProps } from "../../lib/myInterface";
import { useRef } from "react";

export default function BicycleContent(props: ContentProps) {
  const { brand, model, color, price, performance, description, image, type } = props;
  const textRef = useRef<HTMLTextAreaElement>(null);
  const cmtFormRef = useRef<HTMLFormElement>(null);

  const cmtHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/commentPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    console.log(data.message);
  };

  const style = {
    contentStyle: {
      margin: "0 auto",
      textAlign: "center",
    },
    imageStyle: {
      width: "50%",
    },
    comment: {
      padding: "100px",
    },
  };

  const textarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;
  textarea.rows = 5;
  textarea.cols = 90;

  return (
    <>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <h1>{brand}</h1>
        <img src={image} alt={brand} style={style.imageStyle} />
        <div>
          <p>
            {color} {model} {type}
          </p>
          <p>{performance}</p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </div>
      <div style={style.comment}>
        <hr />
        <h2>評論區</h2>
        <div>
          <form onSubmit={cmtHandleSubmit} ref={cmtFormRef}>
            <label htmlFor=""></label>
            <textarea name="commentTextarea" id="commentTextarea"></textarea>
            <div>
              <button type="submit">送出</button>
            </div>
          </form>
        </div>
        <hr />
        <ul role="list" className="p-6 divide-y divide-slate-100">
          <li>
            <h4>用戶：TEST_USER</h4>
            <p>
              對於普通騎士來說，S-Works TarmacSL7的設計雖然高端但價格昂貴。 其輕量化和空氣動力學優勢非常明顯，
              但普通騎行者可能會覺得高性能並不完全符合日常需求。 如果追求性能和設計的極致，這款車無疑是極佳選擇，
              但也要考慮到實際的預算和使用情況。
            </p>
          </li>
          <li>
            <h4>用戶：TEST_USER_2</h4>
            <p>S-Works Tarmac SL7擁有流線型設計，輕量碳纖維車架和出色的空氣動力學性能，提升了騎行效率和舒適度。</p>
          </li>
        </ul>
      </div>
    </>
  );
}
