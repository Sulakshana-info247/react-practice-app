import React, { useEffect, useState } from "react";

const RandomColors = () => {
  const [typeOfColor, setTypeOfColor] = useState("Hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  const handleCreateRandomHexColor = () => {
    //#678976
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  
  useEffect(()=>{
    if(typeOfColor === 'rgb')  handleCreateRandomRGBColor()
    else handleCreateRandomHexColor()
  },[typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        alignContent: "center"
      }}
    >
      <button onClick={() => setTypeOfColor("Hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "Hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div className="displayColor">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEXColor"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColors;
