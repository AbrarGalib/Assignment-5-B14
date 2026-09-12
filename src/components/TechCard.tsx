import React from 'react';

const TechCard = ({ tech, onAdd }) => {
  const getBadgeColor = (badgeText) => {
    const text = badgeText.toLowerCase();
    if (text.includes('popular') || text.includes('sql') || text.includes('essential')) return 'bg-blue-100 text-blue-600';
    if (text.includes('fast') || text.includes('nosql')) return 'bg-orange-100 text-orange-600';
    if (text.includes('full-stack') || text.includes('containers')) return 'bg-purple-100 text-purple-600';
    if (text.includes('versatile') || text.includes('scalable')) return 'bg-green-100 text-green-600';
    return 'bg-cyan-100 text-cyan-600'; 
  };

  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
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
        <span className="flex items-center text-orange-400 font-bold">
          ★ {tech.rating}
        </span>
      </div>
      
      <button 
        onClick={() => onAdd(tech)}
        className="btn min-h-0 h-10 w-full rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium border-none mt-auto"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;