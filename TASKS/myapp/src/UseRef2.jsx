import React,{useRef} from "react";

const data = [
    {
      titlex:"Title 1",
      subtitle:"Subtitle 1"
    },
    {
      titlex:"Title 2",
      subtitle:"Subtitle 2"
    },
    {
      titlex:"Title 3",
      subtitle:"Subtitle 3"
    }
  ]
  
  const style = {
    color:"green"
  }
  function Ref() {
  
    const divRef = useRef();
  
    const getH1 = ()=>{
      
      console.log(divRef)
      console.log(divRef.current)
  
      divRef.current.style.color="pink"
        
    }

    return (
      
          <main ref={divRef}>

            <h1 onClick={getH1}>Priyanshi</h1>

            {data.map((v)=>{
                
              return(

                  <div key={v.titlex}>
                  <h2>{v.titlex}</h2>
                  <p style={style}> {v.subtitle}</p>
                 
                </div>
              )
  
            })}
  
          </main>
  
      
    );
  }
  
  export default Ref;