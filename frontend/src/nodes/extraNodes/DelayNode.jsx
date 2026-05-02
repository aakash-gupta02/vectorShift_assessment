import { BaseNode } from "../BaseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: "input", label: "Input" }]}
      outputs={[{ id: "output", label: "Output" }]}
    >
      <span className="text-secondary text-xs">Adds delay</span>
    </BaseNode>
  );
};
