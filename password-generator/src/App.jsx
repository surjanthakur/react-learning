import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [charLength, setCharLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [password, setPassword] = useState('');

  const passgenerator = useCallback(() => {
    let pass = '';
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) string += '1234567890';
    if (specialChar) string += '!@#$%^&*()_+=<>?/|';

    for (let i = 1; i <= charLength; i++) {
      let genPass = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(genPass);
    }
    setPassword(pass);
  }, [charLength, number, specialChar, setPassword]);

  useEffect(() => {
    passgenerator();
  }, [charLength, number, specialChar]);

  const copyPasswordRef = useRef(null);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 3000);
  }, [password]);

  return (
    <>
      <div className="main">
        <div className="pass-generator-area">
          <label>password generator</label>
          <input
            className="pass-form"
            type="text"
            value={password}
            readOnly
            ref={copyPasswordRef}
          />
          <button className="btn" onClick={copyPassword}>
            {isCopy ? 'copied !' : 'copy'}
          </button>
        </div>
        <div className="apply-features">
          <label>length</label>
          <input
            className="charlength"
            type="range"
            max={25}
            min={5}
            value={charLength}
            onChange={(e) => {
              setCharLength(e.target.value);
            }}
          />

          <label>numbers</label>
          <input
            className="numbers"
            type="checkbox"
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />

          <label>special-char</label>
          <input
            className="character"
            type="checkbox"
            defaultChecked={specialChar}
            onChange={() => {
              setSpecialChar((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
