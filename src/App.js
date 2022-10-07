import "./App.css";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";
import LeftBar from "./Components/LeftBar";
import Redirect from "./Components/Router";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex",height:"100%" }}>
        <div style={{ marginRight: "16px", backgroundColor: "#001529" }}>
          <LeftBar />
        </div>

        <HashRouter>
          <Redirect />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
