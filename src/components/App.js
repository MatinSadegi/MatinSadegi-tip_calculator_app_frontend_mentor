import React from 'react';

//Context
import ContextProvider from './ContextProvider';
import CountingContextProvider from './CountingContextProvider';

//Component
import Counting from './Counting';
import Output from './Output';

//Style
import '../style/App.css';



function App() {


  return (
    <ContextProvider>
      <CountingContextProvider>
        <div className="full_card">
          <p>SPLI<br/>TTER</p>
          <div className="container">
            <Counting/>
            <Output/>
          </div>
        </div>
      </CountingContextProvider>
    </ContextProvider>
  )
}

export default App
