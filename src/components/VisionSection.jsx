import React from 'react'
import SectionComponent from './SectionComponent'
import PhotoContent from './PhotoContent'
import EyeVision from '../images/eyeVision.jpg'
import OurMission from '../images/woman-vision-image.jpeg'
import { Link } from 'react-router-dom'

const VisionSection = () => { 
  return (
    <React.Fragment>
      <SectionComponent className="bg-green-50">
        <PhotoContent className="md:flex-row md:border-r-2">
          <img
            src={EyeVision}
            alt=""
            className="transition-all duration-300 rounded-lg blur-sm hover:blur-none object-cover rounded-t-xl w-full h-64 md:h-72 md:w-96 md:rounded-none md:rounded-l-lg"
          />
          <div className="flex flex-col space-y-4 justify-between p-4 leading-normal">
            <h2 className="text-gray-900 md:text-end text-3xl font-bold tracking-tight">
              Our Vision
            </h2>
            <p className="md:text-end text-lg font-semibold text-gray-700">
              Empowering the woman to be more aware, be vocal about their
              productive health, and enquire better methods of treatment.
            </p>
            <Link to="about" className="md:text-end">
              <button className="border p-2 rounded-lg bg-green-400 px-4 hover:bg-green-500">
                <span className=" text-gray-800 font-medium text-xl">
                  Read More
                </span>
              </button>
            </Link>
          </div>
        </PhotoContent>
        <PhotoContent className="md:flex-row-reverse md:border-l-2">
          <img
            src={OurMission}
            alt=""
            className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 object-cover rounded-t-xl w-full h-64 md:h-72 md:w-96 md:rounded-none md:rounded-r-lg"
          />
          <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              The FEFK adopts a noble mission that expresses its commitment
              towards women of the society through medical education, creating
              awareness on women health and collaborating with HCP to better
              women health.
            </p>
            <Link to="about" className="">
              <button className="border p-2 rounded-lg bg-green-400 px-4 hover:bg-green-500">
                <span className=" text-gray-800 font-medium text-xl">
                  Read More
                </span>
              </button>
            </Link>
          </div>
        </PhotoContent>
      </SectionComponent>
    </React.Fragment>
  );
}

export default VisionSection
