const initialvalue = 0;
export const reducerfun = (state=initialvalue,action)=>{
    switch(action.type)
    {
        case "inc":
            return state+1;
        case "dec":
            return state-1;
        default:
            return state;
    }
}