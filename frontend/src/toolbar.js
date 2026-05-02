import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-2 flex flex-wrap items-center gap-3">

      {/* Core */}
      <span className="text-xs text-secondary whitespace-nowrap">
        Core:
      </span>
      <div className="flex flex-wrap gap-2">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>

      {/* Divider */}
      <span className="text-secondary opacity-50">|</span>

      {/* Custom */}
      <span className="text-xs text-secondary whitespace-nowrap">
        Custom:
      </span>
      <div className="flex flex-wrap gap-2">
        <DraggableNode type="api" label="API" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="delay" label="Delay" />
      </div>

    </div>
  );
};