import { useState, useCallback, useEffect } from "react";

export default function Generator() {
  const [passlength, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const generate_password = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZfdlfjrvalsjfjroqperutvlsk";
    if (number) str += "0123456789";
    if (specialChar) str += "@#$%^&*()_+";
    for (let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passlength, number, specialChar]);

  useEffect(() => {
    generate_password();
  }, [passlength, number, specialChar]);
  return (
    <div>
      <h1>password generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
        ></input>
        <button>copy</button>
        <input
          type="range"
          min={8}
          max={20}
          value={passlength}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>length: {passlength}</label>

        <input
          type="checkbox"
          defaultChecked={number}
          onChange={() => setNumber((prev) => !prev)}
        />
        <label>number</label>

        <input
          type="checkbox"
          defaultChecked={specialChar}
          onChange={() => setSpecialChar((prev) => !prev)}
        />
        <label>specialChar</label>
      </div>
    </div>
  );
}
