import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
     setName( event.target.value ) ;
    
    
  };


  return (
    <div>
          <label>Enter your name:</label><br/>
          <input type="text" value={name} onChange={handleChange} />
          <h1>{"Hello " + name+"!"}</h1>
        
     
    </div>
  );
}

export default Greeting;