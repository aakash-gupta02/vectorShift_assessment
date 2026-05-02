// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-52 h-20 border border-border-color bg-surface rounded-xl p-3">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div>
        <span className="text-primary font-semibold">Output</span>
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
          <select value={outputType} onChange={handleTypeChange} className="ml-2 px-2 py-1 bg-bg text-primary border border-border-color rounded text-xs">
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
