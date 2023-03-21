import '../assest/css/SlideShowBar.css'
import block_img from '../assest/img/Blockchain.png'
function SlideShowBar() {
  return (
    <div class="company-show-container">
     
        <div class="show-caption f-col">
            <div class="f70 f-white ftb f-al" style={{lineHeight: "85px"}}>
              Transparent <br/>On-chain CEX
            </div>
            <div class="f22 f-white mt40 f-al" style={{lineHeight: "37px"}}>
              InfinityBit will be a permissioned on-chain CEX <br/>
              which will accept the IBIT token for reduced trading<br/>
              fees and access to AI-powered trading.
            </div>
        </div>
        <div class="big-logo">
            <img alt="Vue logo" src={block_img} />
        </div>
  </div>
  );
}

export default SlideShowBar;