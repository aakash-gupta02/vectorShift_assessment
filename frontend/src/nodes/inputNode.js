// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="w-52 h-20 border border-border-color bg-surface rounded-xl p-3">
      <div>
        <span className="text-primary font-semibold">Input</span>
      </div>
      <div className="space-y-2">
        <label className="block text-sm text-secondary">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="ml-2 px-2 py-1 bg-bg text-primary border border-border-color rounded text-xs"
          />
        </label>
        <label className="block text-sm text-secondary">
          Type:
          <select value={inputType} onChange={handleTypeChange} className="ml-2 px-2 py-1 bg-bg text-primary border border-border-color rounded text-xs">
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
}
