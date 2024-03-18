import React from 'react'

function IframeComponent({videoId}) {
  return (
    <div className="container">
        <div className='row w-50 mb-4 justify-content-center m-auto'>
           <div className="col-lg">
           <div id="youtube-player " >
            <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        </div>
           </div>
  )
}

export default IframeComponent
