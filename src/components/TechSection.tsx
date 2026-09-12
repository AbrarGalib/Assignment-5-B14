import React, { useState, Suspense, use } from 'react';
import TechCard from './TechCard';

const techDataPromise = fetch('/data.json').then((res) => res.json());


const TechContent = ({ stack, onAdd, onRemove }) => {
  
  const technologiesData = use(techDataPromise);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
    
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologiesData.map((tech) => (
          <TechCard key={tech.id} tech={tech} onAdd={onAdd} />
        ))}
      </div>

      <div className="w-full lg:w-[350px] flex-shrink-0 bg-gray-50 p-6 border border-gray-200 rounded-xl h-fit sticky top-4">
        <h3 className="font-bold text-xl mb-4">Your Stack ({stack.length})</h3>
        {stack.length === 0 ? (
          <p className="text-sm text-gray-400 border-2 border-dashed border-gray-200 p-4 rounded-lg text-center">Empty</p>
        ) : (
          stack.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-3 mb-2 border border-gray-100 rounded-lg shadow-sm">
              <span className="text-sm font-medium">{item.name}</span>
              <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600 font-bold">✕</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const TechSection = () => {
  const [stack, setStack] = useState([]);

  const handleAdd = (tech) => {
    if (stack.find((item) => item.id === tech.id)) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-pink-500"></span></div>}>
        <TechContent stack={stack} onAdd={handleAdd} onRemove={handleRemove} />
      </Suspense>
    </div>
  );
};

export default TechSection;