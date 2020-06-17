import { spawn, BlobWorker } from "threads";
import "threads/register";
// import inlineWorker from "bundle-text:./worker";

import * as React from "react";
import ReactDOM from "react-dom";
import { Card } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Mail } from "@material-ui/icons";

import "./tailwind.css";

const initWorker = async () => {
  // const worker = await spawn(BlobWorker.fromText(inlineWorker));
  const worker = await spawn(new Worker("./worker"));
  const num = await worker.echo(123);
  console.log("echoing...", num);
};

initWorker();

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <Card>
      <Mail htmlColor="teal" />
    </Card>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
