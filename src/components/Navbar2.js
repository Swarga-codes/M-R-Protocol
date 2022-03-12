import logo from '../assets/logo.png'
import './components.css'
// import { Link } from 'react-router-dom';
import { useState } from "react";

async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
  
    return account;
  }

const Navbar = () => {
    
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
        <button className='enterApp' onClick={connectButtonOnClick}> {!!accountAddress ? accountAddress : "Connect Wallet"}</button>
    {/* </Link>  */}
        
        </div>
        </div>
     );
}
 
export default Navbar;