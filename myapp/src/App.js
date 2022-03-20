import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ToDoApp from './Components/ToDoApp';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ToDoApp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
