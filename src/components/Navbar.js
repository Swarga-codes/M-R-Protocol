import logo from '../assets/logo.png'
import './components.css'
import { Link } from 'react-router-dom';
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
    <Link to="/app"><button className='enterApp'>Enter App</button></Link> 
        
        </div>
        </div>
     );
}
 
export default Navbar;