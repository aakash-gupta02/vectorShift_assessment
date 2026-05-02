import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || "output");
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: "value" }]}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-2 py-1 bg-bg text-primary border border-border rounded text-xs"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-2 py-1 bg-bg text-primary border border-border rounded text-xs"
      >
        <option>Text</option>
        <option>Image</option>
      </select>
    </BaseNode>
  );
};