import { BaseNode } from "../BaseNode";

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API"
      inputs={[{ id: "url", label: "URL" }, { id: "params" }]}
      outputs={[{ id: "response" }]}
    >
      <span className="text-secondary text-xs">
        Calls an external API
      </span>
    </BaseNode>
  );
};