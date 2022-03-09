import Banner from "../assets/Bannerlogo.png";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="Header">
      <img src={Banner} alt="" />
      <h1>
        {" "}
        One <span> Index for</span> Every <span> Asset</span>{" "}
      </h1>
      <div className="headerBtn">
        <button className="buy">
          BUY <img src={logo} alt="" /> MRI
        </button>
        <button className="readMore">READ MORE ABOUT INDEX</button>
      </div>
      <div className="Header-content">
        <p>
          M & Rrotocol is a Decentralized Finance (DEFI) Protocol functioning as
          a fully decentralized, on-chain, treasury-backed, and redeemable
          crypto asset index. Meaning, the Index Protocol is a DEFI protocol
          creating fully transparent, treasury-backed, and redeemable
          crypto-asset pools. Making cryptocurrency investments safer, more
          secure, and more flexible than ever before.
        </p>
      </div>
    </div>
  );
};

export default Header;
