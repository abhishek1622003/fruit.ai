import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <body className=' bg-black pt-5'>
      <div className=' w-screen text-center'>
    <p className=' bg-black text-green-500 font-bold text-3xl '>Fruit.ai</p>
    </div>
    <div className="flex justify-center items-center h-screen bg-black">
      
      <div className="grid grid-cols-2 gap-8 w-2/3">
        <button
          onClick={() => navigate('/chatbot')}
          className="p-6 bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition"
        >
          Chatbot
        </button>
        <button
          onClick={() => navigate('/translator')}
          className="p-6 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition"
        >
          Translator
        </button>
        <button
          onClick={() => navigate('/faq')}
          className="p-6 bg-yellow-500 text-white rounded shadow-lg hover:bg-yellow-600 transition"
        >
          FAQ
        </button>
        <button
          onClick={() => navigate('/about')}
          className="p-6 bg-red-500 text-white rounded shadow-lg hover:bg-red-600 transition"
        >
          About
        </button>
      </div>
    </div>
    </body>
    </>
  );
};

export default HomePage;
