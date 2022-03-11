import logo from '../assets/logo.png'
import './components.css'
import { Link } from 'react-router-dom';
import Hamburger from '../assets/bars.png'
import { useState } from 'react';
import Cross from '../assets/cross.png'
const Navbar = () => {
    const[toggle, setToggle] = useState(false);
    return ( 
        <div className="Navbar">
        <div className="logo">
  <img src={logo} alt="" />
  <p>M&R Protocol</p>
        </div>
        <div className="routes">
        <li>Overview</li>
        <li>M&R Index</li>
        <li>About</li>
        <li>Community</li>
        </div>
        <div className="navBtns">
        <button className='buyMRI'>BUY <img src={logo} alt="" /> MRI</button>
    <Link to="/app"><button className='enterApp'>Enter App</button></Link> 
        
        </div>
        
        {toggle === false?
        <img src={Hamburger} alt="" id='bars' onClick={() => setToggle(!toggle)}/>
        :
        <>
        <div className="cross">
        <div>
        <img src={Cross} alt="" id='bars' className = 'crossBtn' onClick={() => setToggle(!toggle)}/>
        </div>
        <div className="res_routes">
        <li>Overview</li>
        <li>M&R Index</li>
        <li>About</li>
        <li>Community</li>
        </div>
        <div className="res_Btns">
        <button className='resMRI'>BUY <img src={logo} alt="" /> MRI</button>
        <Link to="/app"><button className='resApp'>Enter App</button></Link> 
        </div>
        </div>
        
        </>
    }
    
  
        </div>
     );
}
 
export default Navbar;