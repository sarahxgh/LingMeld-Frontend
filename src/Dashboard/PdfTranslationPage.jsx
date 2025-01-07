import React, { useState } from 'react';

function TranslatorApp() {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  // If you want to store the direction in component state (optional)
  const [translationDirection, setTranslationDirection] = useState('ar-en');

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // This includes "file" and "direction"

    try {
      const response = await fetch('http://127.0.0.1:8000/api/translate-pdf/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setOriginalText(result.extracted_text || '');
        setTranslatedText(result.translated_text || '');
      } else {
        console.error('File upload or translation failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleDirectionChange = (e) => {
    setTranslationDirection(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <img src="logoo.png" alt="Targim Logo" className="h-10" />
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload PDF for Translation
        </h1>

        {/* Upload Form */}
        <form onSubmit={handleFileUpload} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="file"
            name="file"
            accept=".pdf"
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
          />

          {/* Direction selector */}
          <select
            name="direction"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
            value={translationDirection}
            onChange={handleDirectionChange}
          >
            <option value="ar-en">Arabic to English</option>
            <option value="en-ar">English to Arabic</option>
          </select>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600
                       text-white font-semibold rounded-lg
                       hover:from-green-600 hover:to-green-500"
          >
            Upload
          </button>
        </form>

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