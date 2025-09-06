
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture1 from "../assets/1 (2).jpg"
import picture2 from "../assets/2.jpg"
import picture3 from "../assets/3.jpg"
import picture4 from "../assets/4.jpg"
import picture5 from "../assets/5.jpg"
import picture6 from "../assets/6.jpg"
import picture7 from "../assets/7.jpg"
import picture8 from "../assets/8.jpg"
import picture9 from "../assets/9.jpg"
import picture10 from "../assets/10.jpg"

const MainBanner = () => {
  return (
    <div>
           <Carousel>
              <div>
                    <img src={picture7} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
              
                <div>
                    <img src={picture2} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture3}  className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture4} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture5} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture6} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
              
                <div>
                    <img src={picture8} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture9} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={picture10} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[28rem] object-cover" />
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
    </div>
  );
}

export default MainBanner;
