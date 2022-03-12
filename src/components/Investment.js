import InvestLogo from '../assets/invest.png'
import Avalanche from '../assets/avalanche.png'
import Down from '../assets/down.png'
import logo from '../assets/logo.png'
import { useState } from "react";

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}
const Investment = () => {
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
    <div className="Invest">
      <div className="invest-content">
        <h1>Start Your Investments in Few Steps</h1>
        <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
      </div>
      <div className="invest-logo">
      <img src={InvestLogo} alt="" id='investLogo'/>
      <div className='invest_container'>
      <div className="types">
      <button className='buyBtn'>Buy</button>
      <button className='sellBtn'>Sell</button>
      </div>
      <div className="payContainer">
      <div>
      <p style={{position: 'relative',
        top: '-0.7rem'}}>Pay with</p>
      <input type="text" placeholder='0' />
      </div>
      <div>
      <img src={Avalanche} alt=""  id='invest_ava'/>
      <span>AVAX</span>
      <img src={Down} alt="" />
      </div>
      
      </div>
      <div className="payContainer" style={{marginTop:'3rem'}}>
      <div>
      <p style={{position: 'relative',
      top: '-0.7rem'}}>Buy(estimated)</p>
      <input type="text" placeholder='0' />
      </div>
      <div>
      <img src={logo} alt=""  id='invest_ava'/>
      <span>MRI</span>
      <img src={Down} alt="" />
      </div>
     
           </div>
           <button className='connectWallet'onClick={connectButtonOnClick}> {!!accountAddress ? "Connected" : "Connect Wallet"}</button>
      </div>
    
      </div>
    
      </div>
      

  );
};

export default Investment;
