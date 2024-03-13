//import React from 'react'

import pharonicImage from '../../assets/images/phrons.png';


import FirstSection from "./FirstSection";

export default function Pharonic() {
  return (<>
   <FirstSection
      title="PHARONIC"
      subTitle="Pharonic Tourism"
      // description="Egypt's monuments are characterized by the presence of pharaonic civilization. Egypt has monuments that have formed mines for millions of years."
      image={pharonicImage}
      customStyle="custom-style-Pharonic"
      description="Egypt is considered the main source of the Pharaonic civilization in the world, because of the antiquities it contains that have greatly contributed to shaping human history and beliefs. Egypt has great wealth, great culture, and important antiquities. It contains about a third of the world's antiquities, and its antiquities vary between partial, Greek, Coptic, and Islamic antiquities."
    />

  </>
  
  )
}
