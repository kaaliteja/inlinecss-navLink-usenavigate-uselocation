import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigation() {

  let highlightActiveLink = (obj)=>{
    if(obj.isActive==true){
      return{
        backgroundColor:"gold",
        color:"red"
      };
    }
  }
  return (
    <nav>
        <NavLink to="/dashboard" style={(obj)=>{
             return highlightActiveLink(obj);
          }}>Dashboard</NavLink>
        <NavLink to="/tasks"  style={(obj)=>{
          return highlightActiveLink(obj);
      }}>Tasks</NavLink>
        <NavLink to="/leaves" style={(obj)=>{
          return highlightActiveLink(obj);
        }}>Leaves</NavLink>
        <NavLink to="/">SignOut</NavLink>
    </nav>

  )
}

export default TopNavigation
