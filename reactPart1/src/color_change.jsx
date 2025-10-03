import { useState } from "react";

function ChangeColor() {
  let [color, setColor] = useState("");
  return (
    <>
      <div className="root" style={{ backgroundColor: color }}>
        backgroundColor :{color}
      </div>
      <div>
        <button onClick={() => setColor("blue")}>blue</button>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
        <button onClick={() => setColor(" black")}>black</button>
      </div>
    </>
  );
}

export default ChangeColor;
