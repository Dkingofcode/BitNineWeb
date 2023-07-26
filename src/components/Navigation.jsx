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

       <div>
        {/* search */}
       </div>

       <h2>CONTACT</h2>

       <div className='links'>
        <a>github</a>
        <a>Youtube</a>
        <a>Linkedin</a>
        <a>facebook</a>
        <a>M</a>
       </div>
      </header>

      <main>
        <h1>Logo</h1>


        <nav>
          <ul>
            <li>Products</li>
            <li>Use Cases</li>
            <li>Services</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Company</li>
            <li>Ir</li>
            <button>Try Free</button>  
          </ul>  
        </nav>
      </main>
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
