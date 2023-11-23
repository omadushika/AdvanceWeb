"use client"
import { useState } from 'react'
import './Navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

function Navbar(){
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = ()=>{
    setActive('navBar')
  }
    return(
    
    <section className='navBarSection'>
      <header className='hearder flex'>
        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>News</a>
            </li>

            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar}
           className='closeNavbar'>
            <h1> <AiFillCloseCircle className='icon'/></h1>
          </div>

        </div>

        <div onClick={showNav}
         className='toggleNavbar'>
          <BiMenu className='icon'/>
        </div>
      </header>
    </section>
    )
}

export default Navbar