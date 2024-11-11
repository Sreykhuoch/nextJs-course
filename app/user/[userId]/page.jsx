import React from 'react'

export default function page({params}) {    //params : as a props
  return (
    <div>
      User{params?.userId}
    </div>
  )
}
