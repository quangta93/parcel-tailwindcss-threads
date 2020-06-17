import * as React from "react";
import ReactDOM from "react-dom";
import { Card } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Mail } from "@material-ui/icons";

import "./tailwind.css";

const worker = new Worker("./pure-worker");
worker.onmessage = (event: MessageEvent) => console.log('from worker', event.data)

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
