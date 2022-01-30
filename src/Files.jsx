import React from "react";


function Files() {
    return (
      <div className="App">
        <header className="App-header">
        <p><b>Click on the "Choose File" button to upload a file:</b></p>
        <header style={{color:"#480e0e"}}>howdy</header>
          
        <form action="/action_page.php">
          <input style={{ width: '60%', height: 50 }} type="file" id="myFile" name="filename"/>
          <input style={{ width: '20%', height: 40 }} type="submit"/>
        </form>
          <p>
          <img width="400" 
          src="https://cdn0.iconfinder.com/data/icons/seo-web-optimization-3/24/118-512.png"
          alt="new"
          />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
        </header>
      </div>
    );
  }



export default Files;