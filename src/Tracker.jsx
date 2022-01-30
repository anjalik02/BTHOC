import React from "react";

function Tracker() {
    return (
      <div /* style="width:100%; padding-bottom:56.25%; position:relative;" */ className="App">
          {/* <iframe src="https://covid.tamu.edu/dashboard/index.html" style="position:absolute; top:100px; left:100px; 
  width:100%; height:100%; border: outset; overflow: hidden;"></iframe> */}
        <header className="App-header">
          <p>
          <header style={{color:"#480e0e"}}>howdy</header>
          <header style={{color:"#480e0e"}}>howdy</header>
          <iframe src="https://www.cdc.gov/media/index.html" width="1200" height="500" style={{color:"white"}}></iframe>
          <header style={{color:"#480e0e"}}>howdy</header>
          <header style={{color:"#480e0e"}}>howdy</header>
          <iframe src="https://covid.tamu.edu/dashboard/index.html" width="1200" height="500" style={{backgroundColor:"white"}} transparent="0"></iframe>
          <header style={{color:"#480e0e"}}>howdy</header>
          <header style={{color:"#480e0e"}}>howdy</header>
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </header>
      </div>
    );
  }

export default Tracker;