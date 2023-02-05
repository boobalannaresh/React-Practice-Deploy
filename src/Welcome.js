import React from 'react'


function Welcome({name}){
    return(
      <div>
       <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
       </div>
    );
}

const double = (n) => n*2 ;

export {Welcome, double}