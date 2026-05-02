import { BaseNode } from "../BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: "value", label: "Value" }]}
      outputs={[{ id: "true", label: "True" }, { id: "false", label: "False" }]}
    >
      <span className="text-secondary text-xs">
        Conditional branch
      </span>
    </BaseNode>
  );
};