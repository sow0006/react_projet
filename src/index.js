import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


function CoolComponent({cles = 'Cool'}){
  return <p>Youpi So {cles} !</p>
}

ReactDOM.render(
  <div>
    <CoolComponent cles ="awesome"/>
    <CoolComponent />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
