import MarketCapBanner from '../assets/marketCap.png'

const MarketCap = () => {
    return ( 
        <div className="MarketCap">
        <div className="Market-logo">
        <img src={MarketCapBanner} alt="" />
        
       
        </div>
        <div className="market-content">
        <h1>Market Cap</h1>
        <p>$30,624,854.19</p>
        </div>
      
        </div>
     );
}
 
export default MarketCap;