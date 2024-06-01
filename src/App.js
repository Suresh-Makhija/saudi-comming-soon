import React, { useEffect } from 'react';
import './App.css';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import newLogo from './newLogo.png'; // Import the new logo image

function App() {
  useEffect(() => {
    document.title = "World Forum"; // Set the title when the component mounts

    // Dynamically update the favicon
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'icon';
    favicon.href = newLogo; // Use the imported new logo image
    document.head.appendChild(favicon);

    return () => {
      // Optionally, revert favicon changes when the component unmounts
      document.head.removeChild(favicon);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${photo2})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
       <div className="Photos" style={{position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)'}}>
          <img src={photo1} alt="Placeholder Photo 1" style={{width: '440px',height:'180px'}} />
        </div>

        <div className="Photos">
         
        </div>
       <h1  style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>Exciting Things Are Coming Soon!</h1>

      </header>
    </div>
  );
}

export default App;
