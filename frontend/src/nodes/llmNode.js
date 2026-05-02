import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: "system" },
        { id: "prompt" }
      ]}
      outputs={[
        { id: "response" }
      ]}
    >
      <span className="text-secondary text-sm">
        This is a LLM.
      </span>
    </BaseNode>
  );
};