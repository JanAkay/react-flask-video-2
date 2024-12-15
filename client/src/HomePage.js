// HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h1>Choose an option:</h1>
      <button onClick={() => handleNavigation('/human')}>Human</button>
      <button onClick={() => handleNavigation('/object')}>Object</button>
    </div>
  );
}

export default HomePage;
