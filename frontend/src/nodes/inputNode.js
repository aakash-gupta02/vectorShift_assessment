import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || "input");
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: name }]}
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
        <option>File</option>
      </select>
    </BaseNode>
  );
};