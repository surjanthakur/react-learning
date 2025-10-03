import { useState } from "react";
import BackgroundImage from "./pexels-valeriiamiller-18715693.jpg";
import InputBox from "./components/inputBox";
import useCurrency from "./hooks/currency_hook";

export default function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // get currency conversion data [name , conversion value]
  const currencyInfo = useCurrency(fromCurr);

  // get currency conversion names
  const currOptions = Object.keys(currencyInfo);

  // swap currency type options
  const swap = () => {
    setFromCurr(toCurr);
    setToCurr(fromCurr);
  };

  // get converted amount of amount * currencyinfo[to]
  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[toCurr]);
  };

  return (
    // baground image
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* input form  */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* from input box */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                amountChange={(curr) => setAmount(curr)}
                selectedCurrency={fromCurr}
                currencyOptions={currOptions}
                currencyChange={(curr) => setFromCurr(curr)}
              />
            </div>
            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            {/* to input form */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currOptions}
                selectedCurrency={toCurr}
                currencyChange={(curr) => setToCurr(curr)}
              />
            </div>
            {/* converter button */}
            <button
              type="submit"
              onClick={convertAmount}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
