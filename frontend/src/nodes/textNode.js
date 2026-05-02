// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-52 h-20 border border-border-color bg-surface rounded-xl p-3">
      <div>
        <span className="text-primary font-semibold">Text</span>
      </div>
      <div className="mt-2">
        <label className="block text-sm text-secondary">
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange}
            className="ml-2 px-2 py-1 bg-bg text-primary border border-border-color rounded text-xs"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
