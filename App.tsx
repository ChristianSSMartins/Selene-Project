import { ThemeProvider } from "styled-components/native";

import { Signin } from "./src/screens/Signin";

import dark from "./src/theme/dark";
import light from "./src/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <Signin />
    </ThemeProvider>
  );
}