import React, {useState} from "react";

function personalGreeting() {
  let[name, setName] = useState("");
     
    function myname(event){
        setName(event.teget.value);
    }
    return (

        <div>
        <label for="name">Enter your name:</label>
        <input type="text" placeholder="" onChange={myname} value="name"/>
        <h1>Hello{name}!</h1>
        </div>
    )
}

export default personalGreeting;