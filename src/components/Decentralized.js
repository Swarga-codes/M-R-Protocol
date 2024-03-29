import { useEffect } from 'react';
import { useState } from 'react'
import Decentralised from '../assets/decentralised logo.png'

const Decentralized = () => {
   
   
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        console.log(scrollable);
        // if(Math.ceil(scrolled)>3242){
        // alert('target reached')
        // }
        let decen = document.querySelector('#DecenImg');
        if(Math.ceil(scrolled) > 3220 && Math.ceil(scrolled) < 3950){
            decen.style.position = 'fixed';
            decen.style.top = '12rem';
            decen.style.left = '66rem';
        }
        else{
            decen.style.position = 'relative';
            decen.style.top = '22rem';
            decen.style.left = '60rem';
        }
    })
    
    return (
        
        <div className="Decentralised_wrapped">
        
            <img src={Decentralised} alt="" id='DecenImg'/>
            
         
        <div className="Decentralised">
            <h1 style={{marginTop:'10rem'}}>Decentralised Index</h1>
            <p>Every index token is collateralized by a basket of assets curated to that specific pool. No matter the conversion rate of the basket, your index tokens can be redeemed for each of the underlying assets, or if you choose to liquidate normally, the protocol can perform your sales and return the value in Avax to you. </p>
            <button className="readMoreIndex">READ MORE ABOUT INDEX</button>
        </div>
        <div className="Decentralised">
            <h1>Rebalanced Index</h1>
            <p>rebalanceExistingTreasury():</p>
            <p>This function is used to perform a simple swap of token allocation. For example, if Ripple was inside of the basket and the token needed to be replaced, a new token could take its place. The protocol's entire ripple balance could be swapped to the new token. This new token is added to the basket and the treasury value in AVAX is unaffected.</p>
            <button className="readMoreIndex">READ MORE ABOUT INDEX</button>
        </div>
        <div className="Decentralised">
            <h1>Reallocated Index</h1>
            <p>reallocateTreasuryIssuance():</p>
            <p>This function is used to add or remove a token from the basket and alter the percentage of each allocation of funds.</p>
            <button className="readMoreIndex">READ MORE ABOUT INDEX</button>
        </div>
        </div> 
     );
}
 
export default Decentralized;

