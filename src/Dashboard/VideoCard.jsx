import React from 'react';

const VideoCard = ({ title, url, thumbnail }) => {
    return (
        <article className="group hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl overflow-hidden w-[350px] min-w-[240px]">
            {/* Image Section */}
            <figure className="relative overflow-hidden h-[185px]">
                <img 
                    loading="lazy" 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
            </figure>

            {/* Content Section */}
            <div className="p-4 flex flex-col">
                <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 text-blue-500 underline"
                >
                    Watch Video
                </a>
            </div>
        </article>
    );
};

export default VideoCard;