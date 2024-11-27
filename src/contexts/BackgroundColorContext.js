import { createContext } from "react";

export const backgroundColors = {
  black: "black",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.black,
  changeColor: (color) => {},
});
