import React from 'react'
import HighlightText from '../HighLightText'
import man from '../../src/assets/man.png'


export function Home() {

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Celebrating <HighlightText text={"27"} /> Years Of Excellence 
          </h1>
          <p className="mt-8 text-[20px] text-gray-700">
            &ldquo; Committed to Excellence &rdquo;
          </p>
        </div>
       <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] object-contain lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={man}
            alt=""
          />
        </div>
      </div>
      {/* Dominating Sector */}
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <HighlightText text={"Dominating "} />this sector 
            </h1>
            <p className=" mt-10 text-lg leading-8 text-gray-600 text-center">
              Beacon Network stands as a preeminent ELV system integrator and Solution Provider, boasting an impressive legacy in the domains of Surveillance, Security, Communication, and Networking Systems since its inception in 1996. With a quarter-century of dedicated expertise and a track record that has garnered the trust of over 8000 discerning clientele, BEACON excels in     delivering cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
