import React from "react";

class Classcompo extends React.Component
{
    x = 10;
    y =20;
   render()
   {
    return(
        <>
        <h1>Class Component{" " + (this.x + this.y)}</h1>
        <T/>
        </>
    );
   }
}
export default Classcompo;

function T()
{
    const x=2;
    const y=20;

    return(
        <>
        <h1>Hello</h1>
           <h2 style={{color:"red"}}> Sum = 
           {
            // "sum"+ (x+y)
            x+y 
           }
           </h2>
           
        </>    
    )
}