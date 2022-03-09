import logo from '../assets/logo.png'
import './components.css'

const Navbar = () => {
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
     <button className='enterApp'>Enter App</button>
        
        </div>
        </div>
     );
}
 
export default Navbar;