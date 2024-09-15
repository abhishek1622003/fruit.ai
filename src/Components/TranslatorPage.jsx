// TranslatorPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TranslatorContainer = styled.div`
  /* Add your styles here */
  padding: 20px;
  text-align: center;
`;

const Input = styled.textarea`
  /* Add your styles here */
  width: 80%;
  height: 100px;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  /* Add your styles here */
  padding: 10px 20px;
  margin: 10px;
`;

const TranslatorPage = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const translateText = async () => {
    setLoading(true);
    setError('');
    try {
      // For demonstration, using a mock translation
      // In real application, integrate with a translation API like Google Translate
      // Example:
      // const response = await axios.post('https://translation.api/translate', { text, language });
      // setTranslated(response.data.translatedText);

      // Mock translation
      setTimeout(() => {
        setTranslated(`[${language.toUpperCase()} Translation]: ${text}`);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Translation failed');
      setLoading(false);
    }
  };

  return (
    <TranslatorContainer>
      <h2>Translator</h2>
      <Input
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <label>Select Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <Button onClick={translateText} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {translated && <p>{translated}</p>}
    </TranslatorContainer>
  );
};

export default TranslatorPage;
