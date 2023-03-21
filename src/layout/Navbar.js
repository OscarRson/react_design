import logo from '../assest/img/Logo.png';
import '../assest/css/Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className='d-in-l'>
          <div className='f-row f-center'>
            <img className="logo" alt="Vue logo" src={logo}/>
            <div className="f32 f-dark-blue ftb ml10"> InfinityBit </div>
          </div>
        </div>
        <div className="navbar-menu-container">
            <div className="navbar-menu f-row f-center">
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Home </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> News </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Team </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> About </div>
                <button className="down-white-btn f-white f18 ftb d-in-r">Download Whitepaper</button>
            </div>
        </div>
       
        <div className="mobile-menu-btn d-in-r">
            <button className='down-white-btn'><img src="@/assets/MobileBtn.png"/></button>
            <div className="mobile-menu-container f-col f-center">
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Home </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> News </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Team </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> About </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;