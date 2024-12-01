import { getBezierPath, getEdgeCenter } from "@xyflow/react";

const RelationshipEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <path id={id} className="react-flow__edge-path" d={edgePath} />
      <text
        x={labelX}
        y={labelY}
        fill="black"
        fontSize="12"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {data.label}
      </text>
    </>
  );
};

export default RelationshipEdge;
