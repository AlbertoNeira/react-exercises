import React from 'react';

import LanguageContext from './LanguageContext';

const DisplayLanguage = () => {
  return (
    <LanguageContext.Consumer>
      {(selectedLanguage) => (
        <div>
          <h2>Display Language:</h2>
          <p>{selectedLanguage}</p>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default DisplayLanguage;