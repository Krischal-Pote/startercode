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
      {/* <ul className="mt-2">
        {data.columns.map((col: any, index: number) => (
          <li key={index} className="text-sm flex justify-between">
            {col.name} ({col.type}){col.isPrimary && <strong> [PK]</strong>}
          </li>
        ))}
      </ul> */}
      <table className="border">
        <thead className="*:border *:text-sm *:p-2">
          <th>heading 1</th>
          <th>heading 2</th>
          <th>heading 3</th>
        </thead>
        <tbody>
          <tr className="*:border *:text-sm *:p-2">
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
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
