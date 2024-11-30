import React from 'react';

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, description }) => {
  return (
    <article className="group hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl overflow-hidden">
      {/* Card Container */}
      <div className="flex flex-col w-[350px] min-w-[240px]">
        {/* Image Section */}
        <div className="relative overflow-hidden h-[185px]">
          <img 
            loading="lazy" 
            src={image} 
            alt={`Project ${title}`} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col">
          {/* Project Info */}
          <div className="text-xs text-gray-500">
            Project #{id}
          </div>
          
          <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-1">
            {title}
          </h3>
          
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>

          {/* Action Section */}
          <div className="flex justify-between items-center mt-4">
            <button 
              className="px-4 py-2 text-xs font-semibold text-lime-500 hover:text-lime-600 
                         rounded-xl border border-lime-500 hover:border-lime-600 
                         transition-colors duration-300"
            >
              VIEW ALL
            </button>

            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/539d0fa7b8bb44fa5fad0341b1c40a6549d353271f4bb0e50eb8589167a818a5" 
              alt="Project rating" 
              className="w-[55px] aspect-[2.62] object-contain" 
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;






 {/* Logo Section */}
 <div className="flex flex-col items-center w-full">
 <img 
   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6087a086f81b4caf5b13ea72ca7f7010f8c093862f1e009d7a1ab9436c2428" 
   alt="Logo" 
   className="w-[147px] aspect-[6.13] object-contain" 
 />
 <img 
   src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ec59934e81af3f8601bc1389d825454d981bca5b15be7b6e9b5c7ad35bd5b66" 
   alt="Decorative element" 
   className="mt-7 w-full aspect-[250] object-contain" 
 />
</div>