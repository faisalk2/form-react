import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/Form';
import Print from './components/Print';

function App() {
  const [data,setData]=React.useState([]);
  // console.log(data);
  return (
    <div className="App">
     <Form data={data} setData={setData}/>
    <Print data={data}/>
    </div>
  );
}

export default App;
