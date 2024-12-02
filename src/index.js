import React, { useState } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import Cover from "./Cover";

import "./styles.css";

const srcs = [
  "https://avatars.githubusercontent.com/u/10101138?v=4",
  "https://ziardecluj.ro//wp-content/uploads/2022/02/alessandro_2_0.jpg",
  "http://www.ziardecluj.ro/sites/default/files/styles/large/public/media/image/2015/10/alessandro_1_0.jpg?itok=pUyPFbwi"
];

const useSrcs = () => {
  const [selectedSrc, setSrc] = useState(srcs[0]);
  return {
    buttons: srcs.map((src, i) => (
      <button
        className={cx({ active: src === selectedSrc })}
        onClick={() => setSrc(src)}
        key={src}
      >
        image {i + 1}
      </button>
    )),
    // force to re-render
    // this is just example
    cover: srcs.map(src =>
      src === selectedSrc ? <Cover key={src} src={selectedSrc} /> : null
    )
  };
};

function App() {
  const { buttons, cover } = useSrcs();
  return (
    <div className="App">
      {cover}
      <br />
      {buttons}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
