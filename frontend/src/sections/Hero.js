import React from 'react'
import Rellax from 'react-rellax'

import MouseScroll from '../components/MouseScroll'
import HeroBack from '../assets/JPEG/hero_back.jpg'
import CoverImage from '../components/CoverImage'

const heroStyle = {
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const titleStyle = {
  fontWeight: '600',
  borderBottom: '1px solid #555555',
}

const Hero = () => {
  return (
    <CoverImage
      image={HeroBack}
      backgroundColor='radial-gradient(rgba(13, 14, 14, 0.67) 0%, rgba(13, 14, 14, 0.68) 100%)'
      style={heroStyle}
      id='hero'
    >
      <div style={{ marginTop: '-80px' }}>
        <Rellax speed={-2}>
          <h3 style={titleStyle}>Hello, I am Darbaz</h3>
        </Rellax>

        <Rellax speed={0}>
          <h5 style={{ marginTop: '22px', opacity: '0.8' }}>
            Creative designer and developer
          </h5>
        </Rellax>
      </div>

      <MouseScroll />
    </CoverImage>
  )
}

export default Hero
