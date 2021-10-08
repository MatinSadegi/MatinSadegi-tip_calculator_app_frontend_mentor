import React,{useContext,useState} from 'react';


//Style
import '../style/Counting.css';

//Context
import { DataContext } from './ContextProvider';
import { CountingContext } from './CountingContextProvider';

  


function Counting() {

    const {dispatch} = useContext(CountingContext);
    const [data, setData] = useContext(DataContext);
    const [focus, setFocus] = useState({
        btn1:false,
        btn2:false,
        btn3:false,
        btn4:false,
        btn5:false,
        btn6:false,
        input:false
    })

    const [error, setError] = useState({
        ErrorText: "",
        Error: false
    });

    
    const onChangeHandler = (event) =>{

        setData({...data, [event.target.name]: event.target.value});

        
        if(focus.btn1){
            dispatch({type: '5percent' , payload:data})
        }else if(focus.btn2){
            dispatch({type: '10percent' , payload:data})
        }else if(focus.btn3){
            dispatch({type: '15percent' , payload:data})
        }else if(focus.btn4){
            dispatch({type: '25percent' , payload:data})
        }else if(focus.btn5){
            dispatch({type: '50percent' , payload:data})
        }else if(focus.input){
            dispatch({type: 'CUSTOM', payload:data})  
        }

        if(data.people === "" || data.people === "0"){
            setError({
                ErrorText:"Can't be zero",
                Error:true
            })
        }else{
            setError({
                ErrorText:"",
                Error:false
            })
        }

    }

    return (
        <div className="left_div">
            <div className="input_div">
                <p>Bill</p>
                <input 
                    placeholder="0" 
                    onChange={onChangeHandler} 
                    type="text" 
                    value={data.bill} 
                    name="bill" 
    
                />
            </div>
            <div className="reducer_div">
                <p>Select Tip %</p>
                <div className="button_div">    
                    <button 
                        style={{backgroundColor: focus.btn1 ? "hsl(174, 85%, 55%)" : "",
                                color: focus.btn1 ? "hsl(183, 100%, 15%)" : ""}}
                        onClick={() =>{
                            setFocus({btn1:true, btn2:false, btn3:false , btn4:false, btn5:false, input:false })
                            dispatch({type: '5percent' , payload:data})
                        }} >5%
                    </button>

                    <button 
                        style={{backgroundColor: focus.btn2 ? "hsl(174, 85%, 55%)" : "",
                                color: focus.btn2 ? "hsl(183, 100%, 15%)" : ""}}
                        onClick={() =>{
                            setFocus({btn1:false, btn2:true, btn3:false, btn4:false, btn5:false, input:false })
                            dispatch({type: '10percent' , payload:data})
                        }} >10%
                    </button>

                    <button 
                        style={{backgroundColor: focus.btn3 ? "hsl(174, 85%, 55%)" : "",
                                color: focus.btn3 ? "hsl(183, 100%, 15%)" : ""}}
                        onClick={() =>{
                            setFocus({btn1:false, btn2:false, btn3:true, btn4:false, btn5:false, input:false })
                            dispatch({type: '15percent' , payload:data})
                        }} >15%
                    </button>

                    <button 
                        style={{backgroundColor: focus.btn4 ? "hsl(174, 85%, 55%)" : "",
                                color: focus.btn4 ? "hsl(183, 100%, 15%)" : ""}}
                        onClick={() =>{
                            setFocus({btn1:false, btn2:false, btn3:false, btn4:true, btn5:false, input:false })
                            dispatch({type: '25percent' , payload:data})
                        }} >25%
                    </button>
                    <button 
                        style={{backgroundColor: focus.btn5 ? "hsl(174, 85%, 55%)" : "",
                                color: focus.btn5 ? "hsl(183, 100%, 15%)" : ""}}
                        onClick={() =>{
                            setFocus({btn1:false, btn2:false, btn3:false, btn4:false, btn5:true, input:false })
                            dispatch({type: '50percent' , payload:data})
                        }} >50%
                    </button>
                    <input 
                        placeholder="Custom" 
                        name="custom" 
                        value={data.custom}
                        onChange={onChangeHandler} 
                        onFocus={() =>{
                            setFocus({btn1:false, btn2:false, btn3:false, btn4:false, btn5:false, input:true })
                        }}  
                    />
                </div>
            </div>
            <div className="input_div">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"hsl(184, 14%, 56%)", fontWeight:"700"}}>Number Of People</p>
                    {error.Error && <p style={{color:"red", fontSize:"16px"}}>{error.ErrorText}</p>}
                </div>
                <input 
                    placeholder="0" 
                    style={{border: error.Error ? "2px solid red" : ""}} 
                    onChange={onChangeHandler}
                    type="text" 
                    value={data.people} 
                    name="people" 
                />
            </div>

        </div>
        
    )
}

export default Counting;
