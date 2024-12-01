import { Handle } from "@xyflow/react";

const TableNode = ({ data }) => {
  return (
    <div className="bg-gray-100 border rounded shadow p-4">
      <h4 className="font-bold text-center">{data.label}</h4>
      <ul className="mt-2">
        {data.columns.map((col, index) => (
          <li key={index} className="text-sm flex justify-between">
            {col.name} ({col.type}){col.isPrimary && <strong> [PK]</strong>}
          </li>
        ))}
      </ul>
      {/* Handles for connections */}
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

export default TableNode;
