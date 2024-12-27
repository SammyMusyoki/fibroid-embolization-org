import React from 'react'
import HeroComponent from '../components/HeroComponent';

const News = () => {
  return (
    <React.Fragment>
      <HeroComponent className="bg-news">
        <div className="text-center sm:my-16">
          <h1 className="text-6xl text-gray-100 p-4 font-serif font-bold bg-pink-500 bg-opacity-40 border-pink-200 border-2">
            News & Updates
          </h1>
        </div>
      </HeroComponent>
      News and Updates
    </React.Fragment>
  );
}

export default News
