import React from 'react';
import ReactDOM from 'react-dom/client';
import pizza1 from "./pizzas/focaccia.jpg"
import pizzaData from "./data.js"
function App(){
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header(){
  return <h1>Fast React Pizza Co.</h1>
}

function Menu(){
  return (
    <div>
      <h2>Our Menu</h2>
    <Pizza />
    </div>
    
  )
}

function Footer(){
  
  return <footer>. We Are Currently Open</footer>
}

function Pizza(){
  return (
  <div>
    <img src={pizza1} alt="" />
  </div>
  )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
