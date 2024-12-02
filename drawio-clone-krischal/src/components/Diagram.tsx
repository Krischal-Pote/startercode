import { useCallback, useMemo, useState } from "react";
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
import CircleNode from "./nodes/components/circle";
import RectangleNode from "./nodes/components/rectangle";
import EllipseNode from "./nodes/components/ellipse";
import SquareNode from "./nodes/components/square";
import RoundedRectangleNode from "./nodes/components/rectangleRounded";
import TextNode from "./nodes/components/text";
import { NodeType } from "../../utils/home";

export default function Diagram({
  selectedNode,
  setSelectedNode,
  selectedEdge,
  setSelectedEdge,
}) {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useDiagram();

  // Define all node types
  const nodeTypes = useMemo(
    () => ({
      [NodeType.CIRCLE]: CircleNode,
      [NodeType.RECTANGLE]: RectangleNode,
      [NodeType.ELLIPSE]: EllipseNode,
      [NodeType.SQUARE]: SquareNode,
      [NodeType.ROUNDED_RECTANGLE]: RoundedRectangleNode,
      [NodeType.TEXT]: TextNode,
      tableNode: TableNode,
    }),
    []
  );

  const edgeTypes = {
    relationshipEdge: RelationshipEdge,
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

  // Handle node deletion
  const deleteSelectedNode = () => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
      setSelectedNode(null); // Clear selection
    }
  };

  // Handle drag-and-drop events
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      if (!type) return;

      const position = {
        x: event.clientX,
        y: event.clientY,
      };

      const newNode = {
        id: `${type}-${+new Date()}`,
        type,
        position,
        data: { label: `${type} Node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div className="flex-grow h-screen" style={{ height: 800 }}>
      <ReactFlow
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onEdgeClick={(_, edge) => setSelectedEdge(edge)}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        className="react-flow-container"
        onNodeClick={(_, node) => setSelectedNode(node)}
      >
        <MiniMap zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>

      {/* Delete Button */}
      <button onClick={deleteSelectedNode} disabled={!selectedNode}>
        Delete Node
      </button>
    </div>
  );
}
