import { useDiagram } from "../context/DiagramContext";

export default function Toolbar() {
  const { nodes, edges } = useDiagram();

  const exportDiagram = () => {
    const diagramData = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([diagramData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "diagram.json";
    link.click();
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-between shadow-md">
      <button
        className="p-2 bg-green-500 text-white rounded"
        onClick={exportDiagram}
      >
        Export JSON
      </button>
    </div>
  );
}
