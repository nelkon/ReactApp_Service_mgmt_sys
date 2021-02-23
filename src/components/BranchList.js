import React from 'react'
import { useState} from "react"


import Axios from 'axios';

function BranchList() {

        // const [branchId ,setbranchId] = useState(" ")
        // const [branchName ,setbranchName] = useState(" ")
        // const [branchLocation ,setbranchLocation] = useState(" ")

    const [branchList ,setBranchList ] = useState([])

    
  
    const getBranches = () => {
      Axios.get('http://localhost:5000/api/branch').then((response) => {
        setBranchList((response.data))
        console.log(response);
      })
    }


    return (
        // <div>
        //      <div className="card">
        // <button onClick={getBranches}>Show Branches</button>
        // {branchList.map((val, key) => {
        //   return <div>{val.branch_name}</div>
        // })}
        
        // </div>
        // </div>

        <div>
          <center> <button onClick={getBranches}>Show Branches</button> </center>
          {branchList.map((val, key) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{val.branch_name}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6> */}
                {/* <p class="card-text">{contact.company.catchPhrase}</p> */}
              </div>
            </div>
          ))}
        </div>
    )
}

export default BranchList
