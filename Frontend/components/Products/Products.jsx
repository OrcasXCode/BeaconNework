import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import cctv from '../../src/assets/cctv.jpg';
import cctv1 from '../../src/assets/cctv1.jpg';
import cctv2 from '../../src/assets/cctv2.jpg';
import avsol from '../../src/assets/avsol.jpg';
import fire1 from '../../src/assets/fire1.jpg';
import sec from '../../src/assets/sec.jpg';
import server from '../../src/assets/server.jpg';
import server1 from '../../src/assets/server1.jpg';
import sha from '../../src/assets/sha.jpg';
import ucs from '../../src/assets/ucs.jpg';
import HighlightText from '../HighLightText';
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react';
import deal from '../../src/assets/deal.json'
import industry from '../../src/assets/industry.json'
import bigcomp from '../../src/assets/bigcomp.json'
import startup from '../../src/assets/startup.json'


const spanStyle = {
  padding: '20px',
  background: 'your_background_color_here',
  color: 'black',
  fontSize: '80px',
};

const divStyle = {
  display: 'flex',
  opacity:0.7,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px',
}
const slideImages = [
  {
    url:cctv,
    // caption: 'CCTV Surveillance'
  },
  {
    url:avsol,
    // caption: 'Advanced Audio-Visual Systems'
  },
  {
    url:fire1,
    // caption: 'Automated Fire Systems'
  },
  {
    url:sec,
    // caption: 'Safety and Security Systems'
  },
  {
    url:cctv1,
    // caption: 'Camera Security System'
  },
  {
    url:sha,
    // caption: 'Smart Home Automation'
  },
  {
    url:ucs,
    // caption: 'Integrated Communication System'
  },
  {
    url:server,
    // caption: 'Digital Technology Infrastructure'
  },
  {
    url:cctv2,
    // caption: 'CCTV Surveillance'
  },
  {
    url:server1,
    // caption: 'Tech Infrastructure Solutions'
  },
];

export function Products() {
    return (
      <>
      <div>

      <Slide id="slider">
        {slideImages.map((slideImage, index) => (
          <div 
           className='flex flex-wrap w-100% h-100% md:object-center'  
            key={index} 
            style={{ 
              backgroundImage: `url(${slideImage.url})`, 
              backgroundSize: 'cover', // Initially set to cover
              backgroundRepeat: 'no-repeat', // Ensure background doesn't repeat
              backgroundAttachment:'fixed',
              backgroundPosition:'center'
            }}>
            <div>
              <div style={divStyle}></div>
            </div>
          </div>
        ))}
      </Slide>

    </div>



        <div className="max-w-7xl mx-auto">
          <section className="relative overflow-hidden py-20">
            <div className="relative">
              <div className="mx-auto max-w-xl lg:max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                  <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                    OUR PRODUCTS
                  </span>
                  <h1 className="text-5xl font-bold">Explore our vast variety of products</h1>
                </div>
                <div className="my-18 -mx-4 flex  flex-wrap px-4">
                  <div className="mb-12 w-full flex flex-row px-4 lg:mb-0 lg:w-1/2">
                    <a className="group block w-full" href="#">
                      <Lottie animationData={deal}></Lottie>
                      <div>
                        <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                        <HighlightText text="Beacon Network"></HighlightText>- Providing a Variety of Solutions
                      </h4>
                      <p className="max-w-xl text-lg text-gray-500">
                        At Beacon Network, we offer a diverse range of 8000+ products suitable for industries,
                        commercials, and startups alike. Our commitment is to provide cutting-edge solutions for
                        every need.
                      </p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <a className="group mb-8 md:flex flex justify-center items-center">
                       <Lottie animationData={industry}></Lottie>
                      <div className="my-4 pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          Whether it's for industrial purposes, we offer the most durable and efficient solutions for best price.
                        </h4>
                      </div>
                    </a>
                    <a className="group mb-8 md:flex flex justify-center items-center">
                      <Lottie animationData={bigcomp}></Lottie>
                      <div className="my-4 w-[400px] pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          Whether you are a giant corporation or a nimble startup, we provide state-of-the-art solutions.
                        </h4>
                      </div>
                    </a>
                    <a className="group mb-8 md:flex flex justify-center items-center">
                      <Lottie animationData={startup}></Lottie>
                      <div className="my-4 pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          For startups, we offer comprehensive end-to-end solutions to fuel your growth journey.
                        </h4>
                      </div>
                    </a>
                  </div>
                  <a className='mt-12 '>
                      <div className="my-2 pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-xl font-semibold text-gray-900">
                          For any additional questions regarding our products, please don't hesitate to <Link style={{color:'#084c98',textDecoration: 'underline'}} to='/contact-us'>contact us</Link> . Our dedicated team is standing by to provide assistance                   
                        </h4>
                      </div>
                    </a>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-8" />
    </div>
      
      </>
      
    )
}

