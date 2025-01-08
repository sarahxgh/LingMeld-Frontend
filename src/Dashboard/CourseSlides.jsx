import React from 'react';
import { useParams } from 'react-router-dom';

const CourseSlides = () => {
  const { title } = useParams(); // Get the course title from the URL parameters

  // Dummy data for PDF URLs
  const pdfData = {
    "Gramatical TOS 1": "/pdf_slides/Gramatical TOS 1.pdf",
    "Linguistic Models of the Process of Translation": "/pdf_slides/Linguistic models of the process of Translation.pdf",
    "The Analysis of Translation as Text": "/pdf_slides/The Analysis of Translation as Text.pdf",
    "The Teaching of Translation": "/pdf_slides/The Teaching of Translation.pdf",
  };

  const pdfUrl = pdfData[decodeURIComponent(title)] || null; // Get the PDF URL based on the course title

  return (
    <div>
       <h2 className="text-2xl font-bold text-black mb-4 mt-4 pt-4 pb-4 text-left">{title}</h2> {/* Adjusted for padding and alignment */}
      
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="1600vh"
          height="1300vh"
          title="Course PDF"
        />
      ) : (
        <p>No slides available for this course.</p>
      )}
    </div>
  );
};

export default CourseSlides;