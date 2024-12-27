import React from 'react'
import HeroComponent from './HeroComponent'

const HeroSection = () => {
  return (
    <React.Fragment>
        <HeroComponent className='bg-hero'>
            <div className="text-center relative bg-primary/40 bg-opacity-50 py-2 my-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight">
                    We are a Non-profit, Community-based, Development organization.
                </h1>
                <p className='my-5 text-background leading-8 font-medium lg:text-2xl text-medium '>
                    We aim at creating awareness on women health, productive health, 
                    information sharing on medical innovative that are more safe clinically proven
                    secure, and resource saving.
                </p>
            </div>
        </HeroComponent>
    </React.Fragment>
  )
}

export default HeroSection
