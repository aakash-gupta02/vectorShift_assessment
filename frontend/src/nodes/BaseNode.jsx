import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div className="bg-surface border border-border rounded-xl shadow-node p-3 min-w-[200px]">
      
      {/* Inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(index + 1) * 100 / (inputs.length + 1)}%` }}
        />
      ))}

      {/* Title */}
      <div className="text-primary font-semibold mb-2">
        {title}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {children}
      </div>

      {/* Outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(index + 1) * 100 / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};