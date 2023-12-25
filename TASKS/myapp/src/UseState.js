import React,{useState} from "react";


function Ex1()
{
    const [data1, setData1] = useState(0);
    const [data2, setData2] = useState("priyanshi");
    const [data3, setData3] = useState([1,2,3,4]);
    const [data4, setData4] = useState({name:"jiya"});

    const num_up = () => {
        setData1(data1+1); 
    }
    const string_up = () => {
        setData2("yanshi"); 
    }
    const arr_up = () => {
        setData3([10,20,30,40]); 
    }
    const obj_up = () => {
        setData4({name:"disha"}); 
    }

   
   return(
    <>
    <button onClick={num_up}>Update Number</button>
    <button onClick={string_up}>Update String</button>
    <button onClick={arr_up}>Update array</button>
    <button onClick={obj_up}>Update obj</button>
     <h1> {data1} </h1>
     <h2>{data2}</h2>
     <h3>{data3}</h3>
     <h4>{data4.name}</h4>
    </>
   )
}

export default Ex1;