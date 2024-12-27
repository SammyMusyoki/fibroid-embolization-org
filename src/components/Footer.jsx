import React from 'react'
import{ FaFacebook, FaInstagramSquare, FaTwitter}from "react-icons/fa"
import { BiPaperPlane } from "react-icons/bi";
import{ NavLinks } from '../Data'
import { Link } from 'react-router-dom'
import { siteMetadata } from '../config/site-metadata';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bottom-0 left-0 z-40 w-full bg-primary">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-3">
            <div>
              <h2 className="uppercase pb-2 lg:text-lg font-semibold tracking-wide leading-7">
                Contact Us
              </h2>
              <div className="text-gray-100 font-medium">
                <p className="mb-4 mt-2">The Office Park</p>
                <p className="mb-4 mt-2">Riverside Drive Lavington</p>
                <p className="mb-4 mt-2">OAK Office Ground Floor Room 1</p>
                <p className="mb-4 mt-2">P.O Box 14148 - 00800</p>
                <p className="mb-4 mt-2">Nairobi, Kenya</p>
                <p className="mb-4 mt-2">Phone: +254 (0) 795 412 696</p>
                <p className="mb-4 mt-2 ">
                  {" "}
                  Email:{" "}
                  <a
                    href="mailto:fibroid-embolization-foundation@gmail.com"
                    className="hover:underline"
                  >
                    fibroidembolizationkenya@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="uppercase pb-2 lg:text-lg font-semibold tracking-wide leading-7">
                Useful Links
              </h2>
              <ul className="text-gray-100 font-medium">
                {NavLinks.map((nav, index) => {
                  return (
                    <li key={index} className="mb-4 mt-2">
                      <Link to={nav.href} className="tracking-wider leading-6">
                        {nav.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Newsletter */}
            <div className="">
              <h2 className="uppercase pb-2 lg:text-lg font-semibold tracking-wide leading-7">
                Newsletter
              </h2>
              <p className="text-white font-medium mt-6">
                Sign up for our Latest News and Updates
              </p>
              <form
                action=""
                className="flex flex-col justify-center space-y-2"
              >
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email..."
                  className="p-2 mt-4 text-black text-lg text-sans font-semibold rounded-lg outline-none px-4"
                />
                <button
                  type="button"
                  className="group p-2 bg-green-400 hover:bg-green-500 rounded-lg flex items-center justify-center gap-x-2"
                >
                  {" "}
                  <BiPaperPlane className="group-hover:text-black h-6 w-6 text-black" />{" "}
                  <span className="text-xl font-semibold">Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          <hr className="my-4 border-pink-200 sm:mx-auto lg:my-8" />

          <div className="mx-auto px-6 justify-center md:flex md:items-center md:justify-center">
            <span className="text-medium md:text-lg text-white sm:text-center mb-4 sm:mb-3">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                to="https://Fibroid-Embolisation-Foundation.org/"
                className="hover:underline"
              >
                Fibroid Embolisation Foundation Kenya
              </Link>
              . All Rights Reserved.
            </span>

            <div className="flex justify-center py-4 space-x-6 sm:justify-center sm:mt-0 lg:hidden">
              <Link to={siteMetadata.facebook} className="text-pink-200">
                <span className="sr-only">Facebook Page</span>
                <FaFacebook className="h-6 w-6" fill="currentColor" />
              </Link>
              <Link to={siteMetadata.twitter} className="text-pink-200">
                <span className="sr-only">Twitter Page</span>
                <FaTwitter className="h-6 w-6" fill="currentColor" />
              </Link>
              <Link to={siteMetadata.instagram} className="text-pink-200">
                <span className="sr-only">Instagram Page</span>
                <FaInstagramSquare className="h-6 w-6" fill="currentColor" />
              </Link>
              {/* <Link to={siteMetadata.} className="text-pink-200">
                <span className="sr-only">LinkedIn Page</span>
                <FaLinkedin className="h-6 w-6" fill="currentColor" />
              </Link>
              <Link to={siteMetadata.} className="text-pink-200 ">
                <span className="sr-only">WhatsApp Page</span>
                <FaWhatsappSquare className="h-6 w-6" fill="currentColor" />
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
