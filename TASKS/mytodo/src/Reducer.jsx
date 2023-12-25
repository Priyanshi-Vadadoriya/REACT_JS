const initialval = 0 ;
export const reducerfun = (state=initialval,action)=>{

    switch(action.type){

        case "inc":
            return state+1;
        case "dec":
            return state-1;
        default:
            return state;
    }
}