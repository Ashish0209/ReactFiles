import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var display = new Date();
// to check new Date(2023, 5, 5, 16)
var show = ["Good Morning", "Good AfterNoon", "Good Night"];
var s = display.getHours();
const cssStyle = {};
var n = 0;
if (s >= 1 && s <= 12) {
  n = 0;
  cssStyle.color = "green";
} else if (s >= 12 && s <= 19) {
  n = 1;
  cssStyle.color = "orange";
} else {
  n = 2;
  cssStyle.color = "Black";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        Hlo Sir,<span style={cssStyle}>{show[n]}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
