import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [isCopy, setIscopy] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzDOVMFQPOUTMAW';
    if (number) str += '1234567890';
    if (character) str += '¡™£₹§ˆ¶•̐°°)(*&^%$#@!~₹';
    for (let i = 1; i <= length; i++) {
      let gennumber = Math.floor(Math.random() * str.length);
      pass += str.charAt(gennumber);
    }
    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, setPassword]);

  const copypassword = () => {
    setIscopy(true);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setIscopy(false);
    }, 3000);
  };

  return (
    <>
      <div className="main">
        <div className="pass-generator-area">
          <label>password generator</label>
          <input className="pass-form" type="text" value={password} readOnly />
          <button className="btn" onClick={copypassword}>
            {isCopy ? 'copied' : 'copy'}
          </button>
        </div>
        <div className="apply-features">
          <label>password length {length}</label>
          <input
            className="charlength"
            type="range"
            value={length}
            min={5}
            max={10}
            onChange={(e) => setLength(e.target.value)}
          />

          <label>add numbers</label>
          <input
            className="numbers"
            type="checkbox"
            onChange={() => setNumber((prev) => !prev)}
          />

          <label>add special-char</label>
          <input
            className="character"
            type="checkbox"
            onChange={() => setCharacter((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
