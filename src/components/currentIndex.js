import Ethereum from '../assets/ethereum.png';
import Avalanche from '../assets/avalanche.png';
import Solana from '../assets/solana.png';
import Bitcoin from '../assets/bitcoin.png';
import Nano from '../assets/nano.png';

const  currentIndex= () => {
    return (  
        <>
        <div className='section_two'>
            <div className="current_index">
                <h5>Current Index</h5>
                <div className="sectiontwo_img">
                    <div className="current_img">
                        <img src={Ethereum} alt="" />
                        <p>44.1%</p>
                        </div>
                        <div className="current_img">
                        <img src={Avalanche} alt="" />
                        <p style={{color: "rgba(232, 65, 66, 0.89)"}}>7.5%</p>
                        </div>
                        <div className="current_img">
                        <img src={Solana} alt="" />
                        <p>13.6%</p>
                        </div>
                        </div>
                        <div className="sectiontwo_img">
                        <div className="current_img">
                        <img src={Bitcoin} alt="" />
                        <p>25.9%</p>
                        </div>
                        <div className="current_img">
                        <img src={Nano} alt="" />
                        <p style={{color: "rgba(232, 65, 66, 0.89)"}}>8.9%</p>
                        </div>
                    </div>
                </div>

                <div className="current_index">
                <h5>Wallet Balance : 348.3404</h5>
                <div className="sectiontwo_img">
                    <div className="current_img">
                        <img src={Ethereum} alt="" />
                        <p>44.1%</p>
                        </div>
                        <div className="current_img">
                        <img src={Avalanche} alt="" />
                        <p style={{color: "rgba(232, 65, 66, 0.89)"}}>7.5%</p>
                        </div>
                        <div className="current_img">
                        <img src={Solana} alt="" />
                        <p>13.6%</p>
                        </div>
                        </div>
                        <div className="sectiontwo_img">
                        <div className="current_img">
                        <img src={Bitcoin} alt="" />
                        <p>25.9%</p>
                        </div>
                        <div className="current_img">
                        <img src={Nano} alt="" />
                        <p style={{color: "rgba(232, 65, 66, 0.89)"}}>8.9%</p>
                        </div>
                    </div>
                </div>

            </div>
           </>
    );
}
 
export default currentIndex;