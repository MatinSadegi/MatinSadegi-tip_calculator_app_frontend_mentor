import React,{useReducer, createContext} from 'react';



const initialState = {tip:(0.00).toFixed(2) , total:(0.00).toFixed(2) }
function reducer(state, action){

    switch(action.type){
        case '5percent':{
            const number1 = (action.payload.bill)*(5/100)/(action.payload.people)
            const numberTotal1 = ((action.payload.bill)/(action.payload.people))+(number1)
            return{tip: number1.toFixed(2) , total:numberTotal1.toFixed(2)}
            
        }
        case '10percent':{
            const number2 = (action.payload.bill)*(10/100)/(action.payload.people)
            const numberTotal2 = (action.payload.bill)/(action.payload.people)+number2
            return{tip: number2.toFixed(2) , total:numberTotal2.toFixed(2)}
        }
        case '15percent':{
            const number3 = (action.payload.bill)*(15/100)/(action.payload.people)
            const numberTotal3 = (action.payload.bill)/(action.payload.people)+number3
            return{tip: number3.toFixed(2) , total:numberTotal3.toFixed(2)}
        }
        case '25percent':{
            const number4 = (action.payload.bill)*(25/100)/(action.payload.people)
            const numberTotal4 = (action.payload.bill)/(action.payload.people)+number4
            return{tip: number4.toFixed(2) , total:numberTotal4.toFixed(2)}
        }
        case '50percent':{
            const number5 = (action.payload.bill)*(50/100)/(action.payload.people)
            const numberTotal5 = (action.payload.bill)/(action.payload.people)+number5
            return{tip: number5.toFixed(2) , total:numberTotal5.toFixed(2)}
        }

        case 'CUSTOM':{
            const number6 = (action.payload.bill)*(action.payload.custom)/10/(action.payload.people)
            const numberTotal6 = (action.payload.bill)/(action.payload.people)+number6
            return{tip:number6.toFixed(2) , total:numberTotal6.toFixed(2)}
        }


        case 'RESET':{
            return{
                tip:(0.00).toFixed(2),
                total:(0.00).toFixed(2),
            }
        }
        
        default:
            return {state};
    }
}

export const CountingContext = createContext();


function CountingContextProvider({children}) {


    const [state, dispatch] = useReducer(reducer, initialState);
    


    return (
        <CountingContext.Provider value={{state,dispatch}}>
            {children}
        </CountingContext.Provider>
    )
}

export default CountingContextProvider;
