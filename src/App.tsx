import { useEffect, useState } from "react";
// import Slider from "./components/Slider";

function App() {
  const [sliderValue, setSliderValue] = useState("75");
  const [currentColor, setCurrentColor] = useState("green");
  const [colorClass, setColorClass] = useState("text-green-600");

  useEffect(() => {
    if (sliderValue === "0") {
      setCurrentColor("red");
      setColorClass("text-red-600");
    } else if (sliderValue === "25") {
      setCurrentColor("orange");
      setColorClass("text-yellow-600");
    } else if (sliderValue === "50") {
      setCurrentColor("yellow");
      setColorClass("text-yellow-400");
    } else if (sliderValue === "75") {
      setCurrentColor("green");
      setColorClass("text-green-600");
    } else if (sliderValue === "100") {
      setCurrentColor("blue");
      setColorClass("text-blue-600");
    } else if (sliderValue === "125") {
      setCurrentColor("indigo");
      setColorClass("text-indigo-600");
    } else if (sliderValue === "150") {
      setCurrentColor("violet");
      setColorClass("text-purple-600");
    }
  }, [sliderValue]);

  return (
    <div className="App p-4">
      <h1 className="text-blue-600 text-2xl">Range Slider</h1>

      <input
        type="range"
        min="0"
        max="150"
        step="25"
        value={sliderValue}
        list="colors"
        onChange={(e) => {
          setSliderValue(e.target.value);
        }}
      />

      <datalist id="colors">
        <option value="0"></option>
        <option value="25"></option>
        <option value="50"></option>
        <option value="75"></option>
        <option value="100"></option>
        <option value="125"></option>
        <option value="150"></option>
      </datalist>

      <h3>
        Current color is: <span className={colorClass}>{currentColor}</span>
      </h3>
    </div>
  );
}

export default App;
