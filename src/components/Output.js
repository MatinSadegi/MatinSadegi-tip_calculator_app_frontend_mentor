import React,{useContext} from 'react';

//Style
import '../style/Output.css';

//Context
import { CountingContext } from './CountingContextProvider';
import { DataContext } from './ContextProvider';

function Output() {

    const {state,dispatch} = useContext(CountingContext);
    const [,setData] = useContext(DataContext);

    return (
        <div className="right_div">
            <div style={{width:"100%"}}>
                <div className="tip_amount_div">
                    <p>Tip Amount<br/><span>/ person</span></p>
                    <p className="numbers">${state.tip}</p>
                </div>
                <div className="total_div">
                    <p>Total<br/><span>/ person</span></p>
                    <p className="numbers">${state.total}</p>
                </div>
            </div>
            <button onClick={() =>{
                setData({
                    bill:"0",
                    people:"0",
                    custom:""
                })
                
                dispatch({type: 'RESET'})}}>RESET
            </button>
                
        </div>
        
    )
}

export default Output;
