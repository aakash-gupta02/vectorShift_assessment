import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className="bg-surface border border-border rounded-xl shadow-node p-3 min-w-[200px]">
      {/* Inputs */}
      {inputs.map((input, index) => {
        const top = `${((index + 1) * 100) / (inputs.length + 1)}%`;

        return (
          <div key={input.id}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-${input.id}`}
              style={{ top }}
            />

            <span
              className="absolute right-full mr-2 text-xs text-secondary whitespace-nowrap pointer-events-none"
              style={{
                top,
                transform: "translateY(-50%)",
              }}
            >
              {input.label ?? input.id}
            </span>
          </div>
        );
      })}

      {/* Title */}
      <div className="text-primary font-semibold mb-2">{title}</div>

      {/* Content */}
      <div className="space-y-2">{children}</div>

      {/* Outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
