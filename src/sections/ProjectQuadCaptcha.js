import React from 'react'
import ProjectCard from '../components/ProjectCard'
import qcImage from '../assets/JPEG/QC_MOCKUP.jpg'

const ProjectQuadCaptcha = () => {
  return (
    <>
      <ProjectCard
        image={qcImage}
        title='QUAD CAPTCHA'
        subtitle='Gamified Bot Detector'
        link='/quad-captcha'
        cta_label='Read the case study'
      />
    </>
  )
}

export default ProjectQuadCaptcha