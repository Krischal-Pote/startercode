import { Handle, Position } from "@xyflow/react";

const TableNode = ({
  data,
  isConnectable,
}: {
  data: any;
  isConnectable: boolean;
}) => {
  return (
    <div className="bg-gray-100 border rounded shadow p-4">
      <h4 className="font-bold text-center">{data.label}</h4>
      <table className="border">
        <thead>
          <tr className="*:border *:text-sm *:p-2">
            <th>Column Name</th>
            <th>Type</th>
            <th>Primary Key</th>
          </tr>
        </thead>
        <tbody>
          {data.columns.map((col: any, index: number) => (
            <tr key={index} className="*:border *:text-sm *:p-2">
              <td>{col.name}</td>
              <td>{col.type}</td>
              <td>{col.isPrimary ? "PK" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Handles for connections */}
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isConnectable}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
        id="b"
      />
    </div>
  );
};

export default TableNode;
