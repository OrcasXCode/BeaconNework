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

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  opacity:0.7,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px'
}
const slideImages = [
  {
    url:cctv,
    caption: 'Slide 1'
  },
  {
    url:avsol,
    caption: 'Slide 1'
  },
   {
    url:cctv,
    caption: 'Slide 1'
  },
  {
    url:fire1,
    caption: 'Slide 1'
  },
  {
    url:sec,
    caption: 'Slide 1'
  },
  {
    url:cctv1,
    caption: 'Slide 1'
  },
  {
    url:sha,
    caption: 'Slide 1'
  },
  {
    url:ucs,
    caption: 'Slide 1'
  },
  {
    url:server,
    caption: 'Slide 1'
  },
  {
    url:cctv2,
    caption: 'Slide 1'
  },
  {
    url:server1,
    caption: 'Slide 1'
  },
];

export function Products() {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

