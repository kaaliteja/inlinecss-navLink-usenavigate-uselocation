import React from 'react'
import { Link } from 'react-router-dom'

function Signup() { 
  return (
   <div className='App'>
   <form>
    <h2 style={{backgroundColor:"blue",color:"whitesmoke",borderRadius:"15px",boxShadow:"10px 10px 10px black"}}>Sign up</h2>
        <div>
            <label>First Name</label>
            <input></input>
        </div>
        <div>
            <label>Last Name</label>
            <input></input>
        </div>
        <div>
        <div>
            <label>Age</label>
            <input></input>
        </div>
        <div>
            <label>Gender</label>
            <input></input>
        </div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <div>
            <label>Mobile No</label>
            <input></input>
        </div>
        <div>
            <label>Profile Pic</label>
            <input type='file'></input>
        </div>
        <div>
            <button>Signup</button>
        </div>
    </form>
    <br></br>
    <Link to="/">Login</Link>
    </div>
  )
}

export default Signup
