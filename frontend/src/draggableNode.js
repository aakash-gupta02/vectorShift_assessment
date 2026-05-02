// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} cursor-grab hover:cursor-grabbing min-w-20 h-16 flex items-center rounded-lg bg-surface justify-center flex-col`}
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
          <span className="text-primary">{label}</span>
      </div>
    );
  };
  