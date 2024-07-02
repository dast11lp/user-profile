import React from 'react'
import img from '../../../public/imgs/back.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1>HOLA MUNDO</h1>
      <Image src={img} alt="Profile Picture" width={280} height={300} />
    </div>
  )
}

export default page
