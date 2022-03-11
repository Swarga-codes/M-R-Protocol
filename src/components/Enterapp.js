import Footer from './Footer'


import Avalanche from '../assets/avalanche.png';

import Down from '../assets/down.png';
import logo from '../assets/logo.png';
import '../components/components.css';
import Decentralised from '../assets/decentralised logo.png';
import SecondPageArrow from '../assets/secondpage arrow.png';
import Graph from '../assets/graph.png';
import CurrentIndex from './currentIndex';
const Enterapp = () => {
    return ( 
        <main>
        <div className="graph_cont">
        <div className="section_one">
            <div className="graph">
               <div className="graph_head">
                   <img src={Decentralised} alt="" />
                   <p>MRI</p>
                   <button className='dayBtn' style={{background: '#5474F9',  color: '#FFFFFF'}}>Day</button>
                   <button className='weekBtn'>Week</button>
                   <button className='monthBtn'>Month</button>
                   </div>
                   <h3>M & R Protocol</h3>
                   <div className="graph_dollar">
                   <h2>$ 1.03</h2>
                   <p>2.3% <img src={SecondPageArrow} alt="" /></p>
                   </div>
                   <img className='graph_img' src={Graph} alt="" />
                </div>

             

            </div>



            <div className='invest_container' id='app_invest'>
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
            <button className='connectWallet'>Connect Wallet</button>
            </div>
            </div>
        <CurrentIndex/>
        <Footer/>
        </main>
     );
}
 
export default Enterapp;