import React, { createContext, useContext, useState, ReactNode } from "react";
import { Node, Edge } from "@xyflow/react";

interface DiagramContextType {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
}

const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

export const DiagramProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  return (
    <DiagramContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
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
