import React from 'react'
import {ScaleLoader} from "react-spinners"
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <ScaleLoader
     color="black"
     height={50}
     radius={2}
     width={9}
    />
  </div>
  )
}

export default Spinner;