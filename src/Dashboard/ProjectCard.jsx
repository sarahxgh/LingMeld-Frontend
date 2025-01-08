import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const ProjectCard = ({ id, image, title, description, buttonLabel = "VIEW ALL" }) => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleCardClick = () => {
    // Navigate to the course slides page, passing the course title as a parameter
    navigate(`/course-slides/${encodeURIComponent(title)}`);
  };

  return (
    <article 
      className="group hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl overflow-hidden"
      onClick={handleCardClick} // Add click handler to the article
    >
      {/* Card Container */}
      <div className="flex flex-col w-[350px] min-w-[240px]">
        {/* Image Section */}
        <figure className="relative overflow-hidden h-[185px]">
          <img 
            loading="lazy" 
            src={image} 
            alt={`Project ${title}`} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </figure>

        {/* Content Section */}
        <div className="p-4 flex flex-col">
          {/* Project Info */}
          
          
          <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
          
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>

          {/* Action Section */}
          <footer className="flex justify-between items-center mt-4">
            <button 
              className="px-4 py-2 text-xs font-semibold text-lime-500 hover:text-lime-600 
                         rounded-xl border border-lime-500 hover:border-lime-600 
                         transition-colors duration-300"
              aria-label={`View all details about ${title}`}
            >
              {buttonLabel}
            </button>

            
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;