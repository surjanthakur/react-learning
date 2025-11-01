import { useState } from "react";
import "./card.css";

export default function Card() {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  const handleTheme = (e) => {
    const check = e.target.checked;
    setIsChecked(check);
    setTheme(check ? "dark" : "light");
  };
  return (
    <>
      <div className="main">
        <div className={`card ${theme}`}>
          <label htmlFor="switchCheckDefault">switch theme of card</label>
          <input onChange={handleTheme} type="checkbox" checked={isChecked} />
          <img
            style={{ objectFit: "cover", height: "300px" }}
            src="https://i.pinimg.com/736x/9f/21/c6/9f21c66d9b6cbbba76f940e768a493a9.jpg"
            alt="image"
          ></img>
          <h2>bmw anime card</h2>
          <p>this is a bmw anime car from pintrest</p>
        </div>
      </div>
    </>
  );
}
