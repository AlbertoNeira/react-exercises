import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
  
    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };
  
    return (
      <LanguageContext.Provider value={selectedLanguage}>
        
        {children}
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </LanguageContext.Provider>
    );
  };
  
  export default LanguageProvider;