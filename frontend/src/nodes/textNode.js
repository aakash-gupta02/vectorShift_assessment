import { useState, useEffect, useMemo } from "react";
import { BaseNode } from "./BaseNode";
import { useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  const updateNodeInternals = useUpdateNodeInternals();

  const extractVariables = (value) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...value.matchAll(regex)].map((m) => m[1]);
    return [...new Set(matches)];
  };

  const variables = useMemo(() => extractVariables(text), [text]);

  useEffect(() => {
    // Recompute handle positions/count when variables in {{varName}} change.
    updateNodeInternals(id);
  }, [id, variables, updateNodeInternals]);

  const handleChange = (e) => {
    setText(e.target.value);

    // auto resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((v) => ({ id: v }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        value={text}
        onChange={handleChange}
        rows={1}
        className="w-full resize-none px-2 py-1 bg-bg text-primary border border-border rounded text-xs overflow-hidden"
        placeholder="Enter text with {{variables}}"
      />
    </BaseNode>
  );
};