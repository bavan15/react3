import React from 'react';

function Mobile({name, tool}) {

    return (
      <div>
        <h2>Brand: {name}</h2>
        <h2>Price: {tool}</h2>
      </div>
    );

  }
  
  Mobile.defaultProps = {
    name: "APPLE",
    tool: "100000"
  }
export default Mobile