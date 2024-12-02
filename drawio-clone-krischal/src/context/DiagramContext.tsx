import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";

interface DiagramContextType {
  nodes: Node[];
  onNodesChange: any;
  setNodes: any;
  edges: Edge[];
  setEdges: any;
  onEdgesChange: any;
}

const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

export const DiagramProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <DiagramContext.Provider
      value={{ nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange }}
    >
      {children}
    </DiagramContext.Provider>
  );
};

export const useDiagram = () => {
  const context = useContext(DiagramContext);
  if (!context) {
    throw new Error("useDiagram must be used within a DiagramProvider");
  }
  return context;
};
