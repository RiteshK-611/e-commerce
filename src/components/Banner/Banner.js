import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Home/Home.css";

function Banner() {
    return (
        <div>
            {/* <div className="w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />  */}
            <Carousel 
                autoPlay
                infiniteLoop 
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000} 
                className="home__image"   
            >
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
                </div>

                <div>
                    <img 
                        loading="lazy"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB660400564_.jpg"
                        alt="amazon" 
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner