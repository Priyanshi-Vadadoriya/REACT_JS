import React from "react";

function PropsEx1(props)
{
    return(
        <>
           {props.name}
           {props.age}
           {props.course}
        </>
    )
}

PropsEx1.propTypes = {
    
}
PropsEx1.defaultProps = {
    name:"priyanshi",
    age:"20",
    course:[1,2,3]
}


export default PropsEx1;