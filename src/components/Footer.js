import Discord from '../assets/discord.png';
import Twitter from '../assets/twitter.png';
import Telegram from '../assets/logos_telegram.png';
import Logo from '../assets/logo.png';

const Footer = () => {
    return ( 
        <footer>
            <h1>Join the Community</h1>
            <div className="socialHandles">
                <div className="handle">
                    <img src={Discord} alt="" />
                    <h5>Discord</h5>
                    </div>
                    <div className="handle">
                    <img src={Twitter} alt="" />
                    <h5>Twitter</h5>
                    </div>
                    <div className="handle">
                    <img src={Telegram} alt="" />
                    <h5>Telegram</h5>
                    </div>
                </div>

                <div className='footerLogo'>
                    <img src={Logo} alt="" />
                    <h5>M&R Protocol</h5>
            </div>
            <p className='copyright'>© 2022 M&R Protocol. All Rights Reserved.</p>
        </footer>
     );
}
 
export default Footer;