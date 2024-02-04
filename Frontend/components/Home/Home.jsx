import React from 'react'
import HighlightText from '../HighLightText'
import man from '../../src/assets/man.png'
import seller from '../../src/assets/seller.jpg'
import CountUp from 'react-countup';



export function Home() {

  return (
    <div className="relative w-full">

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Celebrating <CountUp className="text-[#084C98]" start={10} end={27} duration={5}></CountUp> Years Of Excellence 
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

      {/* Become A seller */}
      <div className="mx-auto mt-10 max-w-7xl px-2 py-10 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
       <div className="mb-10 w-full md:w-2/3 lg:mb-0 lg:w-1/2">
          <img
            style={{borderRadius:'10px'}}
            className="h-[700px] w-full rounded-md object-contain"
            src={seller}
            alt="Become a Seller"
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-sm font-italics text-gray-700">Grow . Improve . Empower Your Business</p>
          <h2 className="mt-4 text-3xl font-bold text-black">Become the part of <HighlightText text={"Beacon Network"} /> as a <HighlightText text={"Seller"} /></h2>
          <p className="mt-4 text-gray-600">
            Unlock new opportunities and reach a wider audience by becoming a seller on the Beacon Network. Take your business to the next level!
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Trusted by over 100,000+ businesses and individuals
            </p>
            <div className="mt-2 flex items-center">
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="isolate flex -space-x-2">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dan_Abromov"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Guillermo_Rauch"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Lee_Robinson"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Delba"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700">Join 1000+ Sellers</span>
            </div>
          </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                style={{background:'#084C98',borderRadius:'20px'}}
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Us
              </button>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy policy.
            </span>
          </p>
        </div>
      </div>
      </div>

      {/* Why Us? */}
      <div style={{textAlign:'center'}} className='mt-10 max-w-7xl mx-auto'>    
            <h1 style={{fontSize:'50px'}} className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Performance-Boosting
              <HighlightText text={"Solutions "} />
            </h1>
        {/* 1 */}
        <div className="px-5 relative mx-auto py-24">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <header className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                style={{borderRadius:'10px'}}
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fb3d8d4ebaf3099d78d867c3ac2532d84c773554305ea449059933dab40325b?apiKey=b64be3a11241412fb85a6281032f0ca0&"className="aspect-[1.72] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
                alt=""
              />
            </header>
            <div className="flex flex-col gap-y-6 items-center justify-center mx-auto  w-[31%] ml-5 max-md:w-full max-md:ml-0">
              
                <h1 className="font-bold text-4xl whitespace-nowrap max-md:text-4xl">
                  <HighlightText style={{}} text={"Design"} />
                </h1>
                 <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                  Our detailed blueprints optimize product fitting during site installation, enhancing efficiency and accuracy for a successful deployment. Your project's success is our priority.
                  </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-[100px] whitespace-nowrap items-stretch bg-stone-300 w-full pl-6 pr-12 pt-20 pb-14 max-md:text-4xl max-md:mt-10 max-md:px-5">
                01
              </span>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="px-5 relative mx-auto py-24">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-[100px] whitespace-nowrap justify-center items-stretch bg-stone-300 w-full my-auto pl-6 pr-12 pt-20 pb-14 max-md:text-4xl max-md:mt-10 max-md:px-5">
                02
              </span>
            </div>
           
            <div className="flex flex-col gap-y-6 items-center justify-center mx-auto  w-[31%] ml-5 max-md:w-full max-md:ml-0">
              
                <h1 className=" font-bold text-4xl whitespace-nowrap max-md:text-4xl">
                  <HighlightText style={{}} text={"Next-Gen Solutions"} />
                </h1>
                <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                  Our commitment is to provide customers with cutting-edge technology products, delivering a full spectrum of features and capabilities to meet their needs. Your satisfaction with our advanced solutions is our priority.
                  </p>
            </div>
            
             <header className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                style={{borderRadius:'10px'}}
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec104eab319e7289005149cf34ebe38750262005c6066df78af71c7460eec3e?apiKey=b64be3a11241412fb85a6281032f0ca0&"className="aspect-[1.72] object-contain object-center w-full overflow-hidden max-w-[636px]"
                alt=""
              />
            </header>
          </div>
        </div>

        {/* 3 */}
        <div className="px-5 relative mx-auto py-24">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <header className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                style={{borderRadius:'10px'}}
                loading="lazy"
                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b8ab284000a329ce7731b77f17761d4ffe1baf2163ee20f744a2f6fbe006006?apiKey=b64be3a11241412fb85a6281032f0ca0&"className="w-full h-full"
                alt=""
              />
            </header>
            <div className="flex flex-col gap-y-6 items-center justify-center mx-auto  w-[31%] ml-5 max-md:w-full max-md:ml-0">
              
                <h1 className="text-sky-800 font-bold text-4xl whitespace-nowrap max-md:text-4xl">
                  <HighlightText style={{}} text={"Product Installation "} />
                </h1>
                <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                  Our team of experienced engineers is dedicated to installing your purchased products, ensuring a smooth and efficient setup process for your convenience and satisfaction.
                  </p>
            </div>
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-[100px] whitespace-nowrap justify-center items-stretch bg-stone-300 w-full my-auto pl-6 pr-12 pt-20 pb-14 max-md:text-4xl max-md:mt-10 max-md:px-5">
                03
              </span>
            </div>
          </div>
        </div>

        {/* 4 */}
         <div className="px-5 relative mx-auto py-24">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-[100px] whitespace-nowrap justify-center items-stretch bg-stone-300 w-full my-auto pl-6 pr-12 pt-20 pb-14 max-md:text-4xl max-md:mt-10 max-md:px-5">
                04
              </span>
            </div>
           
            <div className="flex flex-col gap-y-6 items-center justify-center mx-auto  w-[31%] ml-5 max-md:w-full max-md:ml-0">
              
                <h1 className="text-sky-800 font-bold text-4xl whitespace-nowrap max-md:text-4xl">
                  <HighlightText style={{}} text={"Maintenance "} />
                </h1>
                <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                  Our experienced engineers are committed to assisting with the maintenance of your purchased products, guaranteeing their reliability and longevity while keeping you satisfied with our service.
                  </p>
            </div>
            
             <header className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                style={{borderRadius:'10px'}}
                loading="lazy"
               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06806600cead4e023bf01e5d54f1752b1b28150b813ba8c8edfad8b8e1271df9?apiKey=b64be3a11241412fb85a6281032f0ca0&"className="aspect-[1.72] object-contain object-center w-full overflow-hidden max-w-[637px]"
                alt=""
              />
            </header>
          </div>
        </div>

        {/* 5 */}
        <div className="px-5 relative mx-auto py-24">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <header className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              
              <img
                style={{borderRadius:'10px'}}
                loading="lazy"
                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de7c03766757f3c4a1584a83e83e6941aac7b574aa28452d764e245ce9171a1d?apiKey=b64be3a11241412fb85a6281032f0ca0&"className="aspect-[1.72] object-contain object-center w-full overflow-hidden max-w-[635px]"
                alt=""
              />
            </header>
            <div style={{textAlign:'center'}} className="flex flex-col gap-y-6 items-center justify-center mx-auto  w-[31%] ml-5 max-md:w-full max-md:ml-0">
                <h1 className="text-sky-800 font-bold text-4xl whitespace-nowrap max-md:text-4xl">
                  <HighlightText style={{}} text={"Customer Support"} />
                </h1>
                 <p className="max-w-4xltext-base text-gray-600 md:text-xl">
                  We provide 24 X 7 customer service to ensure that you can reach us at any time, day or night, to assist you with your needs and address any inquiries or concerns you may have.
                  </p>
            </div>
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-[100px] whitespace-nowrap justify-center items-stretch bg-stone-300 w-full my-auto pl-6 pr-12 pt-20 pb-14 max-md:text-4xl max-md:mt-10 max-md:px-5">
                05
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* we Are Hiring */}
      <div className="mx-auto max-w-7xl px-2 py-2 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl font-bold text-black">We Are Hiring ! : Crack the <HighlightText text={"Interview"} /> at <HighlightText text={"Beacon Network"} /></h2>
          <p className="mt-4 text-gray-600">
           Want a full time job at Beacon Network? Build essential tips and skills to crack the interview process
        and secure your position in the exciting world of Beacon Network.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Register your email to get all the detailed information about the interview process
            </p>
          </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                style={{background:'#084C98',borderRadius:'20px'}}
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Apply For Job
              </button>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy policy.
            </span>
          </p>
        </div>
        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
          <img
            style={{borderRadius:'10px'}}
            className="h-full w-full rounded-md object-cover"
            src="https://images.pexels.com/photos/7255416/pexels-photo-7255416.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Newsletter"
          />
        </div>
      </div>
    </div>

      {/* Get A Part Time Job */}
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-black">Already got a job ! But want a part-time job ?</h2>
          <p className="mt-2 text-gray-600">
            Already working as a full-time employee ? But want to earn more , we also offer part-time job on daily basis.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Register your email to get all the detailed information about the part-time job scheme.
            </p>
          </div>
        </div>
        
        <div className="mt-10 w-full md:w-1/2 lg:mt-0">
          <form className="flex lg:justify-center">
            <div className="flex w-full max-w-md items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                style={{background:'#084C98',borderRadius:'20px'}}
                className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Register
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>

      </div>
  )
}
