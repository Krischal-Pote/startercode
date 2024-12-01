import { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useDiagram } from "../context/DiagramContext";
import TableNode from "./TableNode";
import RelationshipEdge from "./RelationShipEdge";

export default function Diagram({
  selectedNode,
  setSelectedNode,
  selectedEdge,
  setSelectedEdge,
}) {
  const { nodes, setNodes, edges, setEdges } = useDiagram();

  const nodeTypes = {
    tableNode: TableNode,
  };
  const edgeTypes = {
    relationshipEdge: RelationshipEdge,
  };
  const onEdgeClick = (_, edge) => {
    setSelectedEdge(edge);
  };
  // Handle adding connections (edges)
  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) =>
        addEdge(
          { ...connection, label: "1:1", animated: true, type: "smoothstep" },
          eds
        )
      );
    },
    [setEdges]
  );

  return (
    <div className="flex-grow h-screen" style={{ height: 800 }}>
      <ReactFlow
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onEdgeClick={onEdgeClick}
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) =>
          setNodes((prevNodes) =>
            prevNodes.map((node) => ({
              ...node,
              ...changes.find((change) => change.id === node.id),
            }))
          )
        }
        onEdgesChange={(changes) =>
          setEdges((prevEdges) =>
            prevEdges.map((edge) => ({
              ...edge,
              ...changes.find((change) => change.id === edge.id),
            }))
          )
        }
        onConnect={onConnect}
        fitView
        className="react-flow-container"
        onNodeClick={(_, node) => setSelectedNode(node)}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
