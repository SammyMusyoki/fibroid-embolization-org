import React from 'react'
import HeroComponent from './HeroComponent'
import { BiDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';

const DonationSection = () => {
  return (
    <React.Fragment>
            <HeroComponent className='bg-hero2'>
                <div className="text-start relative">
                    <h1 className="flex   gap-2 text-3xl md:text-4xl font-serif font-semibold text-gray-900">
                        Give a hand.
                        <span><BiDonateHeart className='text-gray-900'/></span>
                    </h1>
                    <p className='font-medium lg:text-2xl text-xl my-5 text-gray-900'>
                        With your help, We can make a difference in thousands of women lives. <Link to="make-a-donation" className='text-pink-600 hover:underline'>Donate</Link> today!
                    </p>
                </div>
            </HeroComponent>
    </React.Fragment>
  )
}

export default DonationSection
