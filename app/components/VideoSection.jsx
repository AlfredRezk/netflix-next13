import React from 'react'

const VideoSection = ({videoKey}) => {
  return (
    <iframe
    className=" w-full h-full lg:w-full relative -z-10 "
    src={`https://www.youtube.com/embed/${videoKey}?&loop=1&autoplay=1&controls=1&showinfo=0&mute=1`}
    title="YouTube video player"
  />
  )
}

export default VideoSection