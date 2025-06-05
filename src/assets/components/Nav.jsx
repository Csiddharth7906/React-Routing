import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
  
 <nav className='mt-10 flex justify-center gap-10'>
      
    <NavLink to="/home">
    {(e)=>{
          return  <span className={[
            e.isActive? 'text-red-500' : 'text-black',
            'font-bold',
           ].join(" ")}>
              Home
            </span>
    
    }}  
           
    </NavLink>
    <NavLink style={(e)=>{
        return {
          color: e.isActive? 'Red' : 'black',
          fontWeight: e.isActive? 'bold' : 'normal',
          textDecoration: 'none'
        }
    }}   to="/user">Users</NavLink>
    <NavLink  className={(e)=>{
      return [
        e.isActive ? 'text-red-500' : 'text-black',
        
      ].join(" ");
      
    }} to="/about">About</NavLink>
    
    </nav>
 
  )
}

export default Nav