function App() {
  return (
    <>
      <div className=" w-screen h-screen bg-zinc-700 flex justify-center">
        <div className=" w-fit h-fit p-4 m-16 bg-yellow-600 rounded-xl shadow-2xl shadow-yellow-700  flex flex-col items-center justify-center ">
          <h1 className=" text-3xl font-extrabold text-amber-100/65 cursor-default">
            Random Password Generator
          </h1>
          {/* Div of password appearence and copy */}
          <div className="flex w-full items-center">
          <div className=" w-[80%] h-10 bg-slate-300 rounded-2xl m-3"></div>
          <button className=" bg-green-400 rounded-lg h-fit p-1 hover:bg-green-500 active:text-lg active:ring-4 active:ring-green-800">Copy</button>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="range"
              min="5"
              max="100"
              className=" cursor-pointer appearance-none rounded-lg h-2 bg-gray-300"
            ></input>
            <span className=" font-semibold mx-2 cursor-default">Length()</span>
            <span className=" text-xl text-amber-100/45 cursor-default ">
              {" "}
              |{" "}
            </span>
            <span className=" font-semibold mx-2 cursor-default">Numbers</span>
            <input type="checkbox" className=" cursor-pointer"></input>
            <span className=" text-xl text-amber-100/45 ml-2 cursor-default">
              |
            </span>
            <span className=" font-semibold mx-2 cursor-default">
              Spl Characters
            </span>
            <input type="checkbox" className=" cursor-pointer"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
