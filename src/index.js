import React, { useState } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import Cover from "./Cover";

import "./styles.css";

const srcs = [
  "https://avatars.githubusercontent.com/u/10101138?v=4",
  "https://images.unsplash.com/photo-1573430365123-1ba5faa6b486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1572724013549-0f11f2a52657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
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
