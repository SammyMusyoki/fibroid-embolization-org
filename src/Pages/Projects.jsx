import React from 'react'
import HeroComponent from '../components/HeroComponent'

const Projects = () => {
  return (
    <React.Fragment>
      <HeroComponent className="bg-project py-8">
        <div className="text-center ">
          <h1 className="text-6xl text-gray-100 p-4 font-serif font-bold bg-red-950 bg-opacity-50 border-red-200 border-2">
            Projects
          </h1>
        </div>
      </HeroComponent>
    </React.Fragment>
  );
}

export default Projects
