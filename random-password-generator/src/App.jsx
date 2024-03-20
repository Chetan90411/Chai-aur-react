import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // UseRef Hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "*!@#$%^&'()*+,-./[]{}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 py-8 px-4">
        <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-zinc-700 ">
          <h1 className="text-4xl text-center">Password Generator</h1>
          <div className="flex max-w-md mx-auto shadow rounded-lg overflow-hidden my-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-700 outline-none text-white px-3 py-1 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                className="cursor-pointer"
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label
                className="cursor-pointer select-none"
                htmlFor="numberInput"
              >
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                className="cursor-pointer"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label className="cursor-pointer select-none" htmlFor="charInput">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
