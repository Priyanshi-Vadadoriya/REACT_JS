import React from "react";


class DemoClass extends React.Component
{
    render()
    {
        return(
            <>
            functional compo inside class Compo
                <DemoFunc/>
            </>
        )
    }
}
export default DemoClass;


function DemoFunc()
{
    return(
        <>
        functional Compo 
        <img src="https://images.homify.com/w_600,c_fill,q_auto,a_0,f_auto/v1558501626/p/photo/image/3064206/6818b2b545db7252c2186a5e2ec00958.jpg" height="200px"/>
            
    </>
    )
}