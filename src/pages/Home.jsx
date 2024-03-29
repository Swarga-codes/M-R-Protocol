import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Header from '../components/Header';
import Marketcap from '../components/MarketCap';
import Decentralized from '../components/Decentralized';
import Investment from '../components/Investment';
import Crypto from '../components/Crypto';
const Home = () => {
    return ( 
        <main>
        <Navbar/>
        <Header/>
        <Marketcap/>
        <Investment/>
        <Crypto/>
        <Decentralized />
        <Team />
        <Footer/>
        
        </main>
     );
}
 
export default Home;