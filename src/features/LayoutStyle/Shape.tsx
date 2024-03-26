import { useState } from "react";

import style from "./LayoutStylePage.module.scss";

function LayoutStylePage() {
  const [list, setList] = useState([style.red, style.green, style.blue]);

  const handleClickRight = () => {
    const copy = [...list];
    const popOut = copy.pop();
    copy.unshift(popOut);
    setList(copy);
  };

  return (
    <div>
      <h1>Layout & Style</h1>

      <button>click left</button>
      <button>click up down</button>
      <button onClick={handleClickRight}>click right</button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px dashed black",
        }}
      >
        {list.map((item) => (
          <div className={item}>Hello</div>
        ))}
      </div>
    </div>
  );
}

export default LayoutStylePage;
