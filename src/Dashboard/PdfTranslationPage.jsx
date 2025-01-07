import React, { useState } from 'react';
import axios from 'axios';

function TranslatorApp() {
  const [formData, setFormData] = useState({
    file: "",
    direction: "",
  });
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'file' && files && files[0]) {
      setFormData(prevData => ({
        ...prevData,
        file: event.target.files[0]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleFileUpload = async () => {
    console.log(formData); // Log form data for debugging

    try {
      const response = await axios.post('http://127.0.0.1:8000/user/translate-pdf/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setOriginalText(response.data.extracted_text || '');
        setTranslatedText(response.data.translated_text || '');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Main Section */}
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload PDF for Translation
        </h1>

        {/* Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="file"
            name="file"
            onChange={handleChange}
            accept=".pdf"
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
          />

          {/* Direction selector */}
          <select
            name="direction"
            className="block w-full px-4 py-2 border  border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
            value={formData.direction}
            onChange={handleChange}
          >
            <option value="ar-en">Arabic to English</option>
            <option value="en-ar">English to Arabic</option>
          </select>

          <button
            type="button"  // Change from "submit" to "button"
            onClick={handleFileUpload}  // Use onClick instead of onSubmit
            className="w-full px-4 py-2 bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933]
                       text-white font-semibold rounded-lg
                       hover:bg-[#9BFD34]"
          >
            Upload
          </button>
        </div>

        {/* Results */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Extracted Text:
          </h2>
          <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm overflow-x-auto text-gray-700">
            {originalText || 'No text extracted yet.'}
          </pre>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Translated Text:
          </h2>
          <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm overflow-x-auto text-gray-700">
            {translatedText || 'No translation available yet.'}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default TranslatorApp;
