import { posthog } from 'posthog-js'
import React, { useState } from 'react'

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(true)

    const acceptCookies = () => {
        posthog.opt_in_capturing()
        setShowBanner(false)
    }
    const declineCookies = () => {
        posthog.opt_out_capturing()
        setShowBanner(false)
    }
  return (
    <React.Fragment>
        {
        showBanner && (
            <div className='relative flex items-center justify-between isolate bg-green-400 rounded p-2 text-sm font-medium'>
                <p>
                    This website uses cookies to ensure you get the best experience on our site as well as help us improve it.
                    Please accept cookies to help us improve.
                </p>
                <div className='flex items-center justify-end gap-2'>
                    <button 
                    type='button' 
                    className='border-2 border-pink-400 bg-pink-200 p-1 rounded-full'
                    onClick={acceptCookies}>Accept cookies</button>
                    <button 
                    type='button' 
                    className='border-2 border-pink-400 bg-pink-200 p-1 rounded-full'
                    onClick={declineCookies}>Decline cookies</button>
                </div>
            </div>                
            )
        }

    </React.Fragment>
  )
}

export default CookieBanner
