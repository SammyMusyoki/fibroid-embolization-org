import React from 'react'

const HeroComponent = ({children, className}) => {
  return (
    <React.Fragment>
    <div className={`relative isolate px-6 lg:px-8 w-full h-full bg-center bg-no-repeat bg-cover ${className}`}>
            <div className="mx-auto max-w-6xl py-28 md:py-24">
                {children}
            </div>
        </div>
    </React.Fragment>
  )
}

export default HeroComponent
