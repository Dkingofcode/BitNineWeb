import React from 'react';
import React, { useState } from 'react';


const Navigation = () => {
   const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English



   const handleLanguageChange = (event) => {
         setSelectedLanguage(event.target.value);
       };
    
  return (
    <div>
      <header>
      <label htmlFor="language">Select Language:</label>
       <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
         <option value="en">English</option>
         <option value="ja">Japanese</option>
         <option value="zh">Chinese</option>
       </select>        
      </header>
    </div>
  )
}

export default Navigation;



// import React, { useState } from 'react';

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

//   // Function to handle language change
//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="language">Select Language:</label>
//       <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
//         <option value="en">English</option>
//         <option value="ja">Japanese</option>
//         <option value="zh">Chinese</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSelector;
