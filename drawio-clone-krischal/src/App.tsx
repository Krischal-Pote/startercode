import { useState } from "react";
import "./App.css";
import Diagram from "./components/Diagram";
import Sidebar from "./components/SideBar";
import Toolbar from "./components/ToolBar";
import { DiagramProvider } from "./context/DiagramContext";

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  return (
    <DiagramProvider>
      <div className="flex h-screen bg-white">
        <Sidebar
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
        <div className="flex-1 flex flex-col ">
          <Toolbar />
          <Diagram
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        </div>
      </div>
    </DiagramProvider>
  );
}

export default App;
