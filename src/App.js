// import React, { Component } from 'react';
import React from 'react';
import { useState} from "react"
import "./App.css"

import Axios from 'axios';

// import BranchList from './components/BranchList'


function App() {
  const [branchId ,setbranchId] = useState(" ")
  const [branchName ,setbranchName] = useState(" ")
  const [branchLocation ,setbranchLocation] = useState(" ")

  const [branchist ,setBranchList ] = useState([])
  
  const getBranches = () => {
    Axios.get('http://localhost:5000/api/branch').then((response) => {
      setBranchList((response.data))
      console.log(response);
    })
  }

  return (
    <div className="App">
      <div className ="information">
      Branch ID:
      <input type ="number" 
      onChange = { (event) => {
        setbranchId(event.target.value)
      }}/>
      

      Branch Name: 
      <input type ="text"
      onChange = { (event) => {
        setbranchName(event.target.value)
      }} />
      

      Branch Location 
      <input type ="text" 
      onChange = { (event) => {
        setbranchLocation(event.target.value)
      }}/>
      
      {/* <button onClick={displayInfo}>Add Branch</button> */}
      </div>
      
        
        <div className="branches">
        <button onClick={getBranches}>Show Branches</button>
        {branchist.map((val, key) => {
          return <div>{val.branch_name}</div>
        })}
        
        </div>
       

    </div>
  );
  
}








export default App;
