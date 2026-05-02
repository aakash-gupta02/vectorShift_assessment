import { BaseNode } from "../BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[{ id: "a", label: "A" }, { id: "b", label: "B" }]}
      outputs={[{ id: "result", label: "Result" }]}
    >
      <span className="text-secondary text-xs">
        Performs calculation
      </span>
    </BaseNode>
  );
};