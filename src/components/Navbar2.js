import logo from '../assets/logo.png'
import './components.css'
// import { Link } from 'react-router-dom';
import { useState } from "react";
import Hamburger from '../assets/bars.png'
import Cross from '../assets/cross.png'

async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
  
    return account;
  }

const Navbar = () => {
    const[toggle, setToggle] = useState(false);
    const [accountAddress, setAccountAddress] = useState("");

    const connectButtonOnClick = () => {
      console.log(window);
      if (
        typeof window !== "undefined" &&
        typeof window.ethereum !== "undefined"
      ) {
        getAccount().then((response) => {
          setAccountAddress(response);
        });
      } else {
        console.log("error");
      }
    };

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
        {/* <button className='buyMRI'>BUY <img src={logo} alt="" /> MRI</button> */}
    {/* <Link to="/app"> */}
        <button className='enterApp' onClick={connectButtonOnClick}> {!!accountAddress ? "Connected" : "Connect Wallet"}</button>
    {/* </Link>  */}
        
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
        {/* <button className='resMRI'>BUY <img src={logo} alt="" /> MRI</button> */}
        {/* <Link to="/app"><button className='resApp'>Enter App</button></Link>  */}
        <button className='enterApp' onClick={connectButtonOnClick}> {!!accountAddress ? "Connected" : "Connect Wallet"}</button>
        </div>
        </div>
        
        </>
    }

        </div>
     );
}
 
export default Navbar;