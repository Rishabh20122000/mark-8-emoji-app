import React, { useState } from "react";
import "./styles.css";

const foodList = {
  "🍔": " cheese burger ",
  "🌯": "burrito",
  "🍞": "bread",
  "🥦": "broccoli",
  "🍣": "sushi",
  "🍧": "shaved ice",
  "🍮": "custard",
  "🍦": "soft ice-cream",
  "🥙": "stuffed flatbread",
  "🍱": "bento box",
  "🍟": "french fries",
  "🌮": "taco",
  "🥗": "green salad",
  "🍄": "mushroom",
  "🌭": "hot dog"
};

let foodWeKnow = Object.keys(foodList);

export default function App() {
  let [meaning, setMeaning] = useState("food item name appears here");

  function flagInputHandler() {
    let userInput = event.target.value;
   let meaning = foodList[userInput];

    if (meaning === undefined) {
      meaning = "Food item not in our database";
    }
    setMeaning(meaning);
  }
  function flagClickHandler(flag) {
    let meaning = foodList[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="headingColor">What's this Food?</h1>
      <input
        onChange={flagInputHandler}
        placeholder="Enter food emoji here to know its name"
      ></input>
      <h2>{meaning}</h2>
      <div className="fooddiv">
        {foodWeKnow.map(function (flag, index) {
          return (
            <span
              onClick={() => flagClickHandler(flag)}
              key={flag}
              className="foodlist"
            >
              {flag}
            </span>
          );
        })}
      </div>
    </div>
  );
}