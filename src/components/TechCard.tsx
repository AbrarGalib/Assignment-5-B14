import React from 'react';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean; // 1. Add the new boolean prop
}

const TechCard = ({ tech, onAdd, isAdded }: TechCardProps) => { // 2. Destructure it
  const getBadgeColor = (badgeText: string) => {
    // ... keep your exact existing color logic here
    const text = badgeText.toLowerCase();
    if (text.includes('popular') || text.includes('sql') || text.includes('essential')) return 'bg-blue-100 text-blue-600';
    if (text.includes('fast') || text.includes('nosql')) return 'bg-orange-100 text-orange-600';
    if (text.includes('full-stack') || text.includes('containers')) return 'bg-purple-100 text-purple-600';
    if (text.includes('versatile') || text.includes('scalable')) return 'bg-green-100 text-green-600';
    return 'bg-cyan-100 text-cyan-600';
  };

  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      {/* ... keep your exact existing icon, badge, text, and rating HTML here ... */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center p-2">
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(tech.badge)}`}>
          {tech.badge}
        </span>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h2>
      <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{tech.description}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
        <span className="bg-gray-100 px-2 py-1 rounded font-medium">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center text-orange-400 font-bold">★ {tech.rating}</span>
      </div>
      
      {/* 3. Update the button to handle the disabled state */}
      <button 
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`btn min-h-0 h-10 w-full rounded-lg font-medium border-none mt-auto transition-colors disabled:opacity-100 ${
          isAdded 
            ? 'bg-green-50 text-green-600 cursor-not-allowed border border-green-200' 
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;