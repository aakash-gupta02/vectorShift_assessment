import { BaseNode } from "../BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={[{ id: "message", label: "Message" }]}
      outputs={[]}
    >
      <span className="text-secondary text-xs">
        Logs output
      </span>
    </BaseNode>
  );
};