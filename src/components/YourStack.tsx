import React from 'react';
import type { Technology } from './TechCard';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const YourStack = ({ stack, onRemove, onClear }: YourStackProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-sm text-gray-500 mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
      </p>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center p-2 border border-gray-100">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors">
                ✕
              </button>
            </div>
          ))}
          <button 
            onClick={onClear}
            className="btn btn-outline border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 hover:text-red-600 w-full mt-4 rounded-lg min-h-0 h-10"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;