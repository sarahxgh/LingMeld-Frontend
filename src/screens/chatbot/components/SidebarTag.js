import React from 'react';
import { FaTrash } from 'react-icons/fa'; // React Icons trash icon
import { green, red, blue, purple, orange, grey } from '@mui/material/colors';


const getTagColor = (tag) => {
  const colors = {
    'Urgent': red[200], // Vibrant red
    'New': green[300], // Vibrant green
    'Important': red[300], // Slightly darker red for importance
    'Follow-up': blue[300], // Vibrant blue
    'Completed': purple[300], // Vibrant purple
    'In Progress': orange[300], // Vibrant orange
  };
  return colors[tag] || grey[400]; // Default vibrant grey
};

const SidebarTag = ({ name, onDelete, tags }) => {
  return (
    <li className="text-sm rounded-md ml-2 p-4 hover:bg-gray-100 cursor-pointer w-full">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">{name}</span>
          {/* Add tags below the title with dynamic colors */}
          <div className="mt-2 flex space-x-2">
            {tags && tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-white rounded-full"
                style={{ backgroundColor: getTagColor(tag) }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <FaTrash
          onClick={onDelete}
          className="text-gray-500 cursor-pointer hover:text-gray-700 w-4 h-4 transition-transform transform hover:scale-110 rounded-full" // Added hover effects
        />
      </div>
    </li>
  );
};

export default SidebarTag;
