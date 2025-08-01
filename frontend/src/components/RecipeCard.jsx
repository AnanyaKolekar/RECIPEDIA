import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipes/${recipe.category}/${recipe.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 transition cursor-pointer"
      onClick={handleCardClick}
    >
      <img 
        src={recipe.image} 
        onError={(e) => { e.target.src = '/default.jpg' }} 
        alt={recipe.name} 
        className="h-48 w-full object-cover" 
      />
      <div className="p-4 !bg-white dark:!bg-slate-800">
        <h3 className="font-semibold text-xl !text-gray-800 dark:!text-white text-center">
          {recipe.name}
        </h3>
      </div>
    </div>
  );
};

export default RecipeCard;