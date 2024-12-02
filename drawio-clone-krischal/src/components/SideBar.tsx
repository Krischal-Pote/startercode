import { useState } from "react";
import { useDiagram } from "../context/DiagramContext";
import { Link } from "react-router-dom";
import CustomNodes from "./nodes";
import { NodeType } from "../../utils/home";

export default function Sidebar({
  selectedNode,
  setSelectedNode,
  selectedEdge,
  setSelectedEdge,
}) {
  const { nodes, setNodes, edges, setEdges } = useDiagram();
  const [newColumn, setNewColumn] = useState({ name: "", type: "VARCHAR" });
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id: number) => {
    setExpanded(id);
  };
  const NODES = [
    NodeType.RECTANGLE,
    NodeType.CIRCLE,
    NodeType.ROUNDED_RECTANGLE,
    NodeType.SQUARE,
    NodeType.ELLIPSE,
    NodeType.TEXT,
  ];

  // const updateEdgeRelationship = (relationship) => {
  //   if (selectedEdge) {
  //     setEdges((prevEdges) =>
  //       prevEdges.map((edge) =>
  //         edge.id === selectedEdge.id ? { ...edge, label: relationship } : edge
  //       )
  //     );
  //     setSelectedEdge((prev) => ({ ...prev, label: relationship }));
  //   }
  // };
  const addTable = () => {
    const newNode = {
      id: `table-${Date.now()}`,
      type: "tableNode",
      data: {
        label: `Table ${nodes.length + 1}`,
        columns: [],
      },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    console.log("new node", newNode);

    setNodes((pvNodes: any) => pvNodes.concat(newNode));
  };

  const deleteTable = (id: string) => {
    // setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    // if (selectedNode?.id === id) setSelectedNode(null);
  };

  const addColumn = () => {
    if (selectedNode && newColumn.name) {
      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === selectedNode.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  columns: [...node.data.columns, newColumn],
                },
              }
            : node
        )
      );
      setNewColumn({ name: "", type: "VARCHAR" });
    }
  };

  const deleteColumn = (columnName: string) => {
    if (selectedNode) {
      // setNodes((prevNodes) =>
      //   prevNodes.map((node) =>
      //     node.id === selectedNode.id
      //       ? {
      //           ...node,
      //           data: {
      //             ...node.data,
      //             columns: node.data.columns.filter(
      //               (col) => col.name !== columnName
      //             ),
      //           },
      //         }
      //       : node
      //   )
      // );
    }
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const renderShape = (nodeType) => {
    switch (nodeType) {
      case NodeType.RECTANGLE:
        return <div className="w-16 h-10 bg-blue-400"></div>;
      case NodeType.CIRCLE:
        return <div className="w-12 h-12 bg-green-400 rounded-full"></div>;
      case NodeType.ROUNDED_RECTANGLE:
        return <div className="w-16 h-10 bg-yellow-400 rounded-md"></div>;
      case NodeType.SQUARE:
        return <div className="w-12 h-12 bg-red-400"></div>;
      case NodeType.ELLIPSE:
        return <div className="w-20 h-12 bg-purple-400 rounded-full"></div>;
      case NodeType.TEXT:
        return (
          <div className="text-gray-700 font-semibold">
            <span>Text</span>
          </div>
        );
      default:
        return <div className="w-12 h-12 bg-gray-300"></div>;
    }
  };
  return (
    <div className="w-60 bg-gray-200 p-4 shadow-md">
      <Link to="/landingpage" className="block text-blue-500 mb-4">
        Go to Landing Page
      </Link>
      <h3 className="text-lg font-bold mb-4">Diagram Sidebar</h3>

      {/* Add Table */}
      <button
        onClick={addTable}
        className="w-full bg-blue-500 text-white p-2 rounded-md mb-4"
      >
        Add Table
      </button>

      {/* Manage Selected Table */}
      {selectedNode ? (
        <div>
          <h4 className="text-md font-semibold mb-2">
            Edit Table: {selectedNode?.data?.label || "Unnamed"}
          </h4>
          <input
            type="text"
            placeholder="Column Name"
            value={newColumn.name}
            onChange={(e) =>
              setNewColumn((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-2 border rounded mb-2"
          />
          <select
            value={newColumn.type}
            onChange={(e) =>
              setNewColumn((prev) => ({ ...prev, type: e.target.value }))
            }
            className="w-full p-2 border rounded mb-2"
          >
            <option value="INT">INT</option>
            <option value="VARCHAR">VARCHAR</option>
            <option value="BOOLEAN">BOOLEAN</option>
          </select>
          <button
            onClick={addColumn}
            className="w-full bg-green-500 text-white p-2 rounded mb-4"
          >
            Add Column
          </button>
          <h5 className="text-sm font-bold mb-2">Columns:</h5>
          <ul>
            {selectedNode?.data?.columns?.map((col) => (
              <li
                key={col.name}
                className="flex justify-between items-center bg-white p-2 rounded mb-1 shadow-sm"
              >
                <span>
                  {col.name} ({col.type})
                </span>
                <button
                  onClick={() => deleteColumn(col.name)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500 text-sm">Select a table to edit.</p>
      )}

      {/* Table List */}
      <h4 className="text-md font-semibold mt-4">All Tables</h4>
      <ul>
        {nodes.map((node) => (
          <li
            key={node.id}
            className="flex justify-between items-center p-2 bg-white rounded mb-2 shadow-sm cursor-pointer"
            onClick={() => setSelectedNode(node)}
          >
            <span>{node.data?.label || `Table ${node.id}`}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTable(node.id);
              }}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4 className="text-md font-semibold mt-4">Shapes</h4>
      <div className="grid grid-cols-3 gap-2">
        {NODES.map((nodeType) => (
          <div
            key={nodeType}
            draggable
            onDragStart={(event) => onDragStart(event, nodeType)}
            className="p-2 bg-white rounded shadow-sm cursor-move flex justify-center items-center"
          >
            {renderShape(nodeType)}
          </div>
        ))}
      </div>
    </div>
  );
}
