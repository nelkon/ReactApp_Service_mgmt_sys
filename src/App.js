import React from 'react';
import { useState} from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BranchList from './components/BranchList'


import Axios from 'axios';




function App() {
  // const [branchId ,setbranchId] = useState(" ")
  // const [branchName ,setbranchName] = useState(" ")
  // const [branchLocation ,setbranchLocation] = useState(" ")

  // const [branchist ,setBranchList ] = useState([])
  
  // const getBranches = () => {
  //   Axios.get('http://localhost:5000/api/branch').then((response) => {
  //     setBranchList((response.data))
  //     console.log(response);
  //   })
  // }

  return (
    
    <div className="App">
      < Navbar />
      
        <BranchList />
        {/* <div className="branches">
        <button onClick={getBranches}>Show Branches</button>
        {branchist.map((val, key) => {
          return <div>{val.branch_name}</div>
        })}
        
        </div> */}
       

    </div>
  );
  
}








export default App;
