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
          <p>{"Hello " + name+"!"}</p>
        
     
    </div>
  );
}

export default Greeting;