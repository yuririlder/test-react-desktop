import { render } from "react-dom";
import AppRoutes from "./routes/routes";

const rootElement = document.getElementById("root");
render(
  <div>
    <AppRoutes />
  </div>,
  rootElement
);
