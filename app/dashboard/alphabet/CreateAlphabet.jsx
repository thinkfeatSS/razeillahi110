'use client'; // Mark this as a client-side component

import { useState } from 'react';
import axios from 'axios';

const CreateAlphabet = () => {
  // State to manage form inputs
  const [letter, setLetter] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the form submission and POST request
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    // Create the data object to be sent in the request body
    const postData = {
      letter,
      content,
    };
    console
    try {
      const res = await axios.post('https://razeillahi.vercel.app/api/alphabet', postData);
      console.log(res);
      // Handle successful response
      setSuccessMessage('Alphabet created successfully!');
      setLetter(''); // Clear form inputs
      setContent('');
      setError(null); // Clear any previous error
    } catch (error) {
      // Handle error
      setError('Failed to create alphabet');
      console.error('Error creating alphabet:', error);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1>Create Alphabet</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="text-black w-full mb-2"
          placeholder="Letter"
          value={letter}
          onChange={(e) => setLetter(e.target.value)} // Update state when input changes
          required
        />
        <textarea
          className="text-black w-full h-28 mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Update state when input changes
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Create
        </button>
      </form>

      {/* Display success or error messages */}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CreateAlphabet;
