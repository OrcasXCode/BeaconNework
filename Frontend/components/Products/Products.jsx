import React, { Suspense } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import cctv1 from '/cctv1.svg';
import cctv2 from '/cctv2.svg';
import cctv3 from '/cctv3.svg';
import avsol from '/avsol.svg';
import fire1 from '/fire1.svg';
import sec from '/sec.svg';
import server from '/server1.svg';
import server1 from '/server2.svg';
import sha from '/sha.svg';
import ucs from '/ucs.svg';
import HighlightText from '../HighLightText';
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react';
import deal from '../../src/assets/deal.json'
import industry from '../../src/assets/industry.json'
import bigcomp from '../../src/assets/bigcomp.json'
import startup from '../../src/assets/startup.json'
import ImageSlider from '../ImageSlider/ImageSlider';

// Optimized Lottie component with lazy loading
const OptimizedLottie = ({ animationData, className = "max-w-full h-auto", ...props }) => (
  <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
    <Lottie 
      animationData={animationData} 
      className={className}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true
      }}
      {...props}
    />
  </Suspense>
);


export function Products() {
    return (
    <>
    <ImageSlider></ImageSlider>
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
                      <OptimizedLottie animationData={deal} />
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
                       <OptimizedLottie animationData={industry} />
                      <div className="my-4 pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          Whether it's for industrial purposes, we offer the most durable and efficient solutions for best price.
                        </h4>
                      </div>
                    </a>
                    <a className="group mb-8 md:flex flex justify-center items-center">
                      <OptimizedLottie animationData={bigcomp} />
                      <div className="my-4 w-[400px] pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          Whether you are a giant corporation or a nimble startup, we provide state-of-the-art solutions.
                        </h4>
                      </div>
                    </a>
                    <a className="group mb-8 md:flex flex justify-center items-center">
                      <OptimizedLottie animationData={startup} />
                      <div className="my-4 pt-2 md:ml-6 md:mt-0">
                        <h4 className="text-l text-center font-semibold text-gray-900">
                          For startups, we offer comprehensive end-to-end solutions to fuel your growth journey.
                        </h4>
                      </div>
                    </a>
                  </div>
                  <a className='mt-12 '>
                      <div className="my-2 p-2 pt-2 md:ml-6 md:mt-0">
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

