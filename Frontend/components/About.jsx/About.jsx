import React from 'react'
import HighlightText from '../HighLightText'
import list from '/list.svg'
import guj from '/guj.svg'
import CountUp from 'react-countup';



export function About() {


  return (
    <div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Why Choose <HighlightText text={"Beacon Network"}></HighlightText> ?
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            At Beacon Network, we take pride in being the most experienced and trusted company across the state of Gujarat. With a legacy of 27 years, we have consistently delivered top-quality products and cutting-edge solutions, setting the standard for excellence in the industry as compared to other companies.
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            We are dedicated to providing the most advanced and best-in-class products and solutions, ensuring that our clients benefit from our wealth of experience and commitment to excellence.
            </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            What sets us apart is our extensive network of partnerships with over 3000 companies, allowing us to offer a diverse range of products that cater to the unique needs of each client. From cutting-edge technology to innovative solutions, we bring the best in the market directly to our clients.
            </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Our commitment to providing unparalleled variety and quality has made Beacon Network a trusted choice among businesses seeking the latest and most advanced products. Join us in experiencing the future with Beacon Network  where excellence meets innovation.
            </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src={guj}
            alt=""
          />
        </div>
        
        <hr className="mt-20" />


        {/* <div className="flex flex-row h-full max-w-7xl mx-auto space-y-8 pb-10 pt-12 max-sm:flex  bg-black">
            <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
                <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                    Our <HighlightText text={"Companies"}></HighlightText>
                </p>
                <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                    We have established strategic partnerships with over 3,000 renowned technology giants worldwide.
                </p>
            </div>
            <div style={{  height: '800px', width: '800px', position: 'relative', overflow:'hidden'}}>
              {/* id="torqafflogo" */}
                {/* <img  style={{ objectFit: 'contain',opacity:0.8, width: '100%', height: '100%', backgroundColor: 'transparent'}} src={list} alt="Your Alt Text" />
            </div>
        </div> */} 

    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Our <HighlightText text="Companies"></HighlightText>
          </h1>
          <p className="mt-8 text-lg text-gray-600">
            We have established strategic partnerships with over 3,000 renowned technology giants worldwide.
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 overflow-y-hidden">
          <img
            id="torqafflogo"
            className="aspect-[3/2] opacity-[0.5] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={list}
            alt=""
          />
        </div>
      </div>
    </div>
        
      </div>
      <hr className="mt-20 max-w-7xl mx-auto" />

            <div style={{textAlign:'center'}} className="flex flex-col items-center ">
            <div className="w-full max-w-[1104px] mt-12 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                    <div style={{textAlign:'center'}}  className="flex flex-col items-center my-auto max-md:mt-10">
                        <h1 className="text-3xl mx-auto font-bold text-[#084c98] md:text-5xl md:leading-10">
                            <CountUp start={0} end={27} duration={8}></CountUp>+
                        </h1>
                        <div className="max-w-4xl text-base text-gray-600 md:text-xl">
                            Of Experience
                        </div>
                    </div>
                </div>
               

                <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                    <div style={{textAlign:'center'}}  className="bg-white flex grow flex-col items-stretch w-full pl-14 pr-16 pt-4 pb-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <h1 className="text-3xl mx-auto font-bold text-[#084c98] md:text-5xl md:leading-10">
                            <CountUp start={5000} end={10000} duration={5}></CountUp>+
                        </h1>
                        <div className="max-w-4xl text-base text-gray-600 md:text-xl">
                            Satisfied Customers
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                    <div style={{textAlign:'center'}}  className="flex flex-col items-stretch my-auto max-md:mt-10">
                        <h1 className="text-3xl mx-auto font-bold text-[#084c98] md:text-5xl md:leading-10">
                           <CountUp start={1000} end={3000} duration={5}></CountUp>+
                        </h1>
                        <div className="max-w-4xl mx-auto text-base text-gray-600 md:text-xl">
                            Companies
                        </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
      <hr className="mt-10 max-w-7xl mx-auto" />
     
    </div>
  )
}
