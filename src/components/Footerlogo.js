import React from 'react'
import { Image } from 'react-bootstrap'
import Imagefooter from '../images/yamii.jpg'
function Footerlogo() {
  return (
    <div>
      <Image className='footerlogo' src={Imagefooter} />
    </div>
  )
}

export default Footerlogo