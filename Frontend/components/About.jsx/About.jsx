import React, { useState } from 'react'
import { Menu, X, MapPin, ImageOff } from 'lucide-react'
import HighlightText from '../HighLightText'
import list from '../../src/assets/list.png'

const users= [
  {
    name: 'Alexandra Simmons',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Founder & CEO',
  },
  {
    name: 'Sophie Clark',
    image:
      'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
    position: 'Chief Technology Officer',
  },
  {
    name: 'Emma Stevens',
    image:
      'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Marketing Lead',
  },
  {
    name: 'Michael Baker',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Sales Manager',
  },
  {
    name: 'Chris Robertson',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
    position: 'Customer Support Specialist',
  },
  {
    name: 'Daniel Turner',
    image:
      'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600',
    position: 'Product Manager',
  },
  {
    name: 'Olivia Davis',
    image:
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    position: 'UI/UX Designer',
  },
]

export function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
            We are dedicated to providing the most advanced and best-in-class products and solutions, ensuring that our clients benefit from our wealth of experience and commitment to excellence.          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        <hr className="mt-20" />
        {/* {/* greetings */}
        {/* <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div> */}
        {/* TEAM */}
        {/* <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                Our <HighlightText text={"Companies"}></HighlightText>
             </p>
             <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                We have established strategic partnerships with over 3,000 renowned technology giants worldwide.
            </p>
            <div>
                <img src={list}></img>
            </div>
        </div>
      </div>
      <hr className="mt-6" />
     
    </div>
  )
}
