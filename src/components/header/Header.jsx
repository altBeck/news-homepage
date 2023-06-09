import './header.css';
import hero from '../../assets/images/image-web-3-desktop.jpg';
import mobile from '../../assets/images/image-web-3-mobile.jpg';


const Header = () => {
  return (
    <div className="header-container">
      <div className="hero-container">
        <div>
          <img className="desktop" src={hero} alt="hero"/>
          <img className="mobile" src={mobile} alt="hero mobile view"/>
        </div>

        <div className="header-sub_container">

          <div className="hero-sub_container">
            <header>
              <h1>The Bright Future of Web 3.0?</h1>
            </header>
            <div className="hero-side_container">
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

              <a className="button" href="#">READ MORE</a>
            </div>
          </div>

        </div>

      </div>

      <section className="hero-sidenews">
        <h2>New</h2>

        <div className="minion">
          <header>Hydrogen VS Electric Cars</header>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className="line"></div>

        <div className="minion">
          <h4>The Downsides of AI Artistry</h4>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <div className="line"></div>

        <div className="minion">
          <h4>Is VC Funding Drying Up?</h4>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </section>
    
    </div>
  )
}

export default Header