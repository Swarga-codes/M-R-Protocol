import Bannerlogo from '../assets/Bannerlogo.png'
import Bitcoin from '../assets/bitcoin.png'
import Avalanche from '../assets/avalanche.png'
import Solana from '../assets/solana.png'
import Nano from '../assets/nano.png'
import Ethereum from '../assets/ethereum.png'
import BNB from '../assets/bnb.png'
import Poa from '../assets/poa.png'
import Dash from '../assets/dash.png'
const Crypto = () => {
    return ( 
        <div className="Crypto">
        <img src={Bannerlogo} alt="" id='logo'/>
        <div className="Crypto-currency">
        <div>
        <img src={Bitcoin} alt="" />
        </div>
        <div>
        <img src={Avalanche} alt="" />
        </div>
        <div>
        <img src={Solana} alt="" />
        </div>
        <div>
        <img src={Nano} alt="" />
        </div>
        </div>
        <div className="Crypto-currency">
        <div>
        <img src={Ethereum} alt="" />
        </div>
        <div>
        <img src={BNB} alt="" />
        </div>
        <div>
        <img src={Poa} alt="" />
        </div>
        <div>
        <img src={Dash} alt="" />
        </div>
        </div>
        <h1>You’ll need only one</h1>
        </div>
     );
}
 
export default Crypto;