import React, { Component } from 'react'
import Axios from 'axios';
import axios from 'axios';

 class BranchList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              branches : []
         }
     }
     componentDidMount(){
         axios.get('http://localhost:5000/api/branch')
         .then(response =>{
             console.log("response")
             this.setState({branches: response.data})
         })
         .catch(error => {
             console.log(error)
         })

     }


    render() {
        const { branches } = this.state
        return (
            <div>
                List Of Branches
                {
                    branches.length?
                    branches.map( post => <div key={branches.id}> {branches.name} </div>):
                    null
                }
            </div>
        )
    }
}

export default BranchList;
