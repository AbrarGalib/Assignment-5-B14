import React, { useState, Suspense, use } from 'react';
import { toast } from 'react-toastify';
import TechCard from './TechCard';
import type { Technology } from './TechCard';
import YourStack from './YourStack';

const techDataPromise = fetch('/data.json').then((res) => res.json());

interface TechContentProps {
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

const TechContent = ({ stack, onAdd, onRemove, onClear }: TechContentProps) => {
  const technologiesData = use<Technology[]>(techDataPromise);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologiesData.map((tech) => (
          <TechCard 
            key={tech.id} 
            tech={tech} 
            onAdd={onAdd} 
            isAdded={stack.some((item) => item.id === tech.id)} 
          />
        ))}
      </div>

      <div className="w-full lg:w-[350px] flex-shrink-0">
        <YourStack stack={stack} onRemove={onRemove} onClear={onClear} />
      </div>
    </div>
  );
};

const TechSection = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (tech: Technology) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info('Technology removed.');
  };

  const handleClear = () => {
    setStack([]);
    toast.error('Stack cleared.');
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
        <TechContent stack={stack} onAdd={handleAdd} onRemove={handleRemove} onClear={handleClear} />
      </Suspense>
    </div>
  );
};

export default TechSection;