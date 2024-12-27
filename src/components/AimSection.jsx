import React from 'react'
import SectionComponent from './SectionComponent'

const AimSection = () => {
  return (
    <React.Fragment>
      <SectionComponent className="bg-primary">
        <div className="text-center relative -mb-10">
          <h2 className="text-gray-50 text-xl md:text-4xl font-serif font-semibold tracking-wider pb-4">
            As a foundation, our focus is on educating and creating awareness on
            women reproductive health.
          </h2>
          <p className="text-black text-xl md:text-2xl">
            Our aim is to educate women about their reproductive health and Fibroid
            Embolization, a safe and effective treatment for uterine fibroids. We aim to empower them to make informed decisions about their reproductive health.
          </p>
          <blockquote className="p-4 my-4 border-l-4 rounded-r-xl border-primary-foreground bg-green-400">
            <p className="text-md sm:text-lg italic font-semibold text-gray-950">
              Fibroid embolization offers women a safe and effective alternative
              to traditional surgical treatments for uterine fibroids. By
              spreading awareness and providing accurate information about this
              minimally invasive procedure, we can empower women to make
              informed decisions about their health and explore all available
              treatment options. It is time to ensure that women have the
              knowledge and resources to take control of their well-being and
              live their lives to the fullest.
            </p>
          </blockquote>

          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              rel='preconnect'
              src="https://www.youtube.com/embed/5NZSLsQwERA"
              title="Uterine Fibroid Embolization Treatment"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default AimSection

