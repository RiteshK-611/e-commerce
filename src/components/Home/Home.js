import "./Home.css";
import Product from '../Product/Product'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB660400564_.jpg"
        alt="amazon" /> */}
        <Banner />
        
        <div className="home__row">
          <Product
            id="43687168"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={20.72}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="31686174"
            title="Brother XM2701 Sewing Machine, Lightweight, Full Featured, 27 Stitches, 6 Included Feet"
            price={145.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61CKnkFOoRL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="31876417"
            title="Echo Shell (fits Echo 2nd Generation only) – Charcoal Fabric"
            price={18.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61WdpWczUkL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="27177871"
            title="Samsung Galaxy Tab S7+ Wi-Fi, Mystic Black - 256 GB"
            price={905.76}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71rw%2BF2aLHL._AC_UL270_SR206,270_.jpg"
          />
          <Product
            id="67113187"
            title="NYX PROFESSIONAL MAKEUP Control Freak Eyebrow Gel"
            price={4.82}
            rating={3}
            image="https://m.media-amazon.com/images/I/51YOM7SG7OL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="68787647"
            title="SAMSUNG 85-inch Class QLED Q900T Series - Real 8K Resolution Direct Full Array 32X Quantum HDR 32X Smart TV with Alexa Built-in (QN85Q900TSFXZA, 2020 Model)"
            price={6990}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ZsZksHnSL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
