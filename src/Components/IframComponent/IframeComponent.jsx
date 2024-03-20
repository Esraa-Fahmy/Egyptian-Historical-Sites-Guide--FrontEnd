// import React from 'react'

// function IframeComponent({videoId}) {
//   return (
//     <div className="container">
//         <div className='row mb-4 justify-content-center '>
          
//            <div id="youtube-player" >
//             <iframe
//                 // width="70%"
//                 height="300"
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
//                 title="YouTube Video"
//                 allowFullScreen
//             ></iframe>
//         </div>
//         </div>
//            </div>
//   )
// }

// export default IframeComponent


import React from 'react'

function IframeComponent({videoId}) {
  return (
    <div className="container">
      <div className='row mb-4 justify-content-center '>
        <div id="youtube-player" className="text-center"> {/* Center aligning content */}
          <iframe
            width="70%"
            height="300"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
export default IframeComponent