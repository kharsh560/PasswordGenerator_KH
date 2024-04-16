import { useCallback, useState } from "react";

function App() {
  const [Length, setLength] = useState(16);
  const [IncludeNumbers, setIncludeNumbers] = useState(false);
  const [IncludeSplChars, setIncludeSplChars] = useState(false);
  const [Password, setPassword] = useState();

  function passwordGeneratorKHstyle() {
    let randObj = {
      randomNum1: () => {
        return Math.floor(Math.random() * 26) + 65;
      },
      randomNum2: () => {
        return Math.floor(Math.random() * 26) + 97;
      },
      randomNum3: () => {
        return Math.floor(Math.random() * 2) + 1;
      },
      // alphaNum: `randomNum${randomNum3}`,
    };

    let alphaNum = randObj[`randomNum${randObj.randomNum3()}`]();
    // Of course, I needed to write "()" at those two places bcoz they were functions!!
    // console.log(alphaNum);
    // This alphaNum now contain numbers in this range [65, 90] and [97, 122]

    // Now converting this number to ascii value!

    let lengthEg = 10;
    let string = String.fromCharCode(alphaNum);
    let passCode = string;

    for (let i = 1; i <= lengthEg; i++) {
      alphaNum = randObj[`randomNum${randObj.randomNum3()}`]();
      passCode = passCode + String.fromCharCode(alphaNum);
    }
    // YES :-) It worked!!!

    document.getElementById("passwordBox").innerText = passCode;
  }

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let splChars = "!@#$%^&*+_-~`";

    if (IncludeNumbers) string += numbers;
    if (IncludeSplChars) string += splChars;
    // If they are not included, then string remains string only!

    for (let i = 0; i <= Length; i++) {
      password += string[Math.floor(Math.random() * string.length)];
      //Did not do "+1" bcoz the string array starts from 0th index only!
    }

    setPassword(password);
  }, [Length, IncludeNumbers, IncludeSplChars]);

  return (
    <>
      <div className=" w-screen h-screen bg-zinc-700 flex justify-center">
        <div className=" w-fit h-fit p-4 m-16 bg-yellow-600 rounded-xl shadow-2xl shadow-yellow-700  flex flex-col items-center justify-center ">
          <h1 className=" text-3xl font-extrabold text-amber-100/65 cursor-default">
            Random Password Generator
          </h1>
          {/* Div of password appearence and copy */}
          <div className="flex w-full items-center">
            <div
              id="passwordBox"
              className="w-[80%] h-10 bg-slate-300 rounded-2xl m-3 text-lg font-bold font-ubuntu flex justify-center items-center"
            ></div>
            <button
              onClick={() => passwordGeneratorKHstyle()}
              className=" bg-green-400 rounded-lg h-fit p-1 hover:bg-green-500 active:text-lg active:ring-4 active:ring-green-800"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="range"
              min="1"
              max="100"
              value={Length}
              className=" cursor-pointer appearance-none rounded-lg h-2 bg-gray-300"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <span className=" font-semibold mx-2 cursor-default">
              Length({Length})
            </span>
            <span className=" text-xl text-amber-100/45 cursor-default ">
              {" "}
              |{" "}
            </span>
            <span className=" font-semibold mx-2 cursor-default">Numbers</span>
            {/* Number Checkbox */}
            <input
              type="checkbox"
              className=" cursor-pointer"
              defaultChecked={IncludeNumbers}
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            ></input>
            <span className=" text-xl text-amber-100/45 ml-2 cursor-default">
              |
            </span>
            <span className=" font-semibold mx-2 cursor-default">
              Spl Characters
            </span>
            {/* SplChars Checkbox */}
            <input
              type="checkbox"
              className=" cursor-pointer"
              defaultChecked={IncludeSplChars}
              onChange={() => {
                setIncludeSplChars((prev) => !prev);
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
