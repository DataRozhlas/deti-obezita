import React from "react";
import { render } from "react-dom";
import { byeIE } from "./byeie"; // loučíme se s IE
import { Kalkulacka } from "./kalkulacka";

byeIE();

// ========================================
render(<Kalkulacka />, document.getElementById("kalkulacka"));
