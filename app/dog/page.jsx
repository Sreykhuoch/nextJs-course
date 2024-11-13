import { getDogService } from '@/services/product.service'
import React from 'react'

//convert to async function to match with the service function
const DogPage = async () => {

    //calling dog servce 
    const getDogData = await getDogService();
  return (
    <div>
      <h1>dog image </h1>
      <img 
      src={getDogData.message}
      alt='dog img'
      width={400}
      />
    </div>
  )
}

export default DogPage
