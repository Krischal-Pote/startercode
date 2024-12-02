import { useState } from "react";
import { DiagramProvider } from "../context/DiagramContext";
import Sidebar from "../components/SideBar";
import Toolbar from "../components/ToolBar";
import Diagram from "../components/Diagram";
import { ReactFlowProvider } from "@xyflow/react";

const MainApp = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);

  return (
    <DiagramProvider>
      <ReactFlowProvider>
        <div className="flex h-screen bg-white">
          <Sidebar
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
            selectedEdge={selectedEdge}
            setSelectedEdge={setSelectedEdge}
          />
          <div className="flex-1 flex flex-col ">
            <Toolbar />
            <Diagram
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              selectedEdge={selectedEdge}
              setSelectedEdge={setSelectedEdge}
            />
          </div>
        </div>
      </ReactFlowProvider>
    </DiagramProvider>
  );
};

export default MainApp;
