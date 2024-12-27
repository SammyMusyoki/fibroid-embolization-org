import React from 'react'

const PhotoContent = ( {children, className}) => {
  return (
    <React.Fragment>
      <div className={`flex flex-col items-center border-b-2 border-green-500 bg-transparent bg-gray-100 rounded-xl md:max-w-6xl ${className} mb-6` }>
        {children}
      </div>
    </React.Fragment>
  )
}

export default PhotoContent
