import './latest.css';
import retro from '../../assets/images/image-retro-pcs.jpg';
import laptop from '../../assets/images/image-top-laptops.jpg';
import gaming from '../../assets/images/image-gaming-growth.jpg';

const Latest = () => {
  return (
    <div className="latest-container">

      <div className="latest-module">
        <div className="news-img">
          <img src={retro} alt="retro gaming"/>
        </div>
        <div className="latest-sidebar">
          <h3>01</h3>
          <div className="latest-sidebar-content">
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </div>

      <div className="latest-module">
        <div className="news-img lap">
          <img src={laptop} alt="laptop keyboard"/>
        </div>
        <div className="latest-sidebar">
          <h3>02</h3>
          <div className="latest-sidebar-content">
            <h4>Top Laptops of 2022</h4>
            <p>Our best pick for various needs and budgets.</p>
          </div>
        </div>
      </div>

      <div className="latest-module">
        <div className="news-img">
          <img src={gaming} alt="hand levitating gamepad"/>
        </div>
        <div className="latest-sidebar">
          <h3>03</h3>
          <div className="latest-sidebar-content">
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Latest