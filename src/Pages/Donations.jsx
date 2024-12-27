import React from 'react'
import HeroComponent from '../components/HeroComponent'
import SectionComponent from '../components/SectionComponent'

import KCB from '../images/kcb-logo.png'

const Donations = () => {
  return (
    <React.Fragment>
      <HeroComponent className="bg-donate">
        <div className="relative isolate">
          <div className="my-4">
            <h1 className="text-3xl font-semibold font-serif">
              Donate to Fibroid and Fibroid
              <br /> Embolization Foundation <br /> today.
            </h1>
          </div>
        </div>
      </HeroComponent>
      <SectionComponent className="bg-green-100">
          <section className=" w-full p-6">
            <p className="text-center text-lg sm:text-2xl font-normal text-gray-950 tracking-tighter">
              Your donations to the Fibroid and Fibroid Embolization Foundation
              is a meaningful way to contribute to women's reproductive health
              and make a lasting impact in the lives of countless individuals
              affected by fibroids. By supporting FEFK's initiatives in raising
              awareness, advancing research, improving access to healthcare, and
              providing vital support, individuals can join the movement to
              empower women and create a healthier future for all. Together, we
              can make a difference in the lives of women battling fibroids and
              ensure that every woman receives the care and support she
              deserves.
            </p>
          </section>
        <div className="relative isolate flex flex-col md:flex-row gap-2">
          <section className="text-center w-full p-6">
            <h1 className="text-4xl font-semibold font-serif">
              You can make your donations through <br /> our M-pesa
              <br />
              <span className="text-green-600 leading-7">
                KCB Paybill Account
              </span>
            </h1>
            <div className="border-2 border-green-500 rounded-3xl py-6 lg:px-2 4 lg:py-8 mt-4 font-serif">
              <span className="font-bold text-xl text-green-500">
                PayBill Number
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-wide ">
                522522
              </h2>
            </div>
            <div className="border-2 border-green-500 rounded-3xl py-6 lg:px-4 lg:py-8 mt-4 font-serif">
              <span className="font-bold text-xl text-green-500">
                Account Number
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-widest ">
                7557097
              </h2>
            </div>
          </section>
        <section className="w-full text-center mt-7">
          <img src={KCB} alt="KCB Bank Logo" className="w-full h-48" />
          <h1 className="text-4xl font-semibold font-serif text-center text-gray-900">Kenya Commercial Bank</h1>

          <div className='space-y-2 flex flex-col items-start justify-center mt-8 font-serif'>
            <p className="text-start text-2xl lg:text-3xl font-semibold text-green-500">Branch: <span className='text-gray-900'>Kipande House</span></p>
            <p className="text-start text-2xl lg:text-3xl font-semibold text-green-500">Swift Code: <span className='text-gray-900'>KCBLKENX</span></p>
            <p className="text-start text-2xl lg:text-3xl font-semibold text-green-500">Acc/no: <span className='text-gray-900'>1314037048</span></p>
            <p className="text-start text-2xl lg:text-3xl font-semibold text-green-500">Branch Code: <span className='text-gray-900'>101</span></p>
            <p className="text-start text-2xl lg:text-3xl font-semibold text-green-500">Bank Code: <span className='text-gray-900'>01</span></p>
          </div>
        </section>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default Donations
