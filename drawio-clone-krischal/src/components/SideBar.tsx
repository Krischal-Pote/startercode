import { useState } from "react";
import { useDiagram } from "../context/DiagramContext";

export default function Sidebar({ selectedNode, setSelectedNode }) {
  const { nodes, setNodes } = useDiagram();
  const [newColumn, setNewColumn] = useState({ name: "", type: "VARCHAR" });

  const addTable = () => {
    const newNode = {
      id: `table-${Date.now()}`,
      type: "tableNode", // Custom type for the node
      data: {
        label: `Table ${nodes.length + 1}`,
        columns: [],
      },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const deleteTable = (id: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    if (selectedNode?.id === id) setSelectedNode(null); // Deselect if deleted
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
      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === selectedNode.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  columns: node.data.columns.filter(
                    (col) => col.name !== columnName
                  ),
                },
              }
            : node
        )
      );
    }
  };

  return (
    <div className="w-60 bg-gray-200 p-4 shadow-md">
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
    </div>
  );
}
