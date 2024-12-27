import React, { useRef, useState } from 'react'
import HeroComponent from '../components/HeroComponent'
import SectionComponent from '../components/SectionComponent'
import emailjs from '@emailjs/browser'

const SuccessResult = ({ message }) => {
  return (
    <p className='bg-green-500 p-2 rounded-lg'>
      {/* Your message has been sent succesfully. We will get back to you as soon as possible. */}
      {message}
    </p>
  )
}

const Contact = () => {

  const [isResult, setShowResult] = useState(false)
  const [message, setMessage] = useState("")
  
  const contactForm = useRef()

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rv4eeqn",
        "template_05ky0dn",
        contactForm.current,
        "VbSqNlIUmTswPBEfC"
      )
      .then(
        (result) => {
          setMessage(result.text);
        },
        (error) => {
          setMessage(error.text);
        }
      );
      contactForm.current.reset();
      setShowResult(true)
  };

  setTimeout( () => {
    setShowResult(false)
  }, 5000)

  return (
    <React.Fragment>
      <HeroComponent className="bg-contact">
        <div className="text-center sm:my-16">
          <h1 className="text-6xl text-gray-100 p-4 font-serif font-bold bg-green-500 bg-opacity-40 border-green-200 border-2">
            Contact Us
          </h1>
        </div>
      </HeroComponent>
      <SectionComponent >
        <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-gray-500">
          Please fill out the form below to send us a message. We will get back
          to you as soon as possible.
        </p>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden border rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +254-795-412-696
                </p>
                {/* <p  className="mt-1 text-lg font-medium text-gray-900">
                      +254-746-526-117
                    </p> */}
              </div>
            </div>

            <div className="overflow-hidden border rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  contact@fibroid-embolization-foundation.org
                </p>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">
                  hr@example.com
                </p> */}
              </div>
            </div>

            <div className="overflow-hidden border rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  The Office Park Riverside Drive Lavington - OAK Office Ground
                  Floor Room 1, P.O Box 14148-00800, Kenya.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden border rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>

              <form ref={contactForm} onSubmit={sendMail} className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="text"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="Enter your email address"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="number"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Phone number{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="tel"
                        name="po_number"
                        id="number"
                        placeholder="Enter your phone number"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Subject{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Message{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        required
                        name="user_message"
                        id="message"
                        placeholder="Write us something ..."
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-green-600 caret-green-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-lg font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md focus:outline-none hover:bg-green-700 focus:bg-green-700"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <div className='mt-2'>
                {isResult ? <SuccessResult message={message}/> : null}
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default Contact
