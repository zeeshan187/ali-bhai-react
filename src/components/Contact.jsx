import React, { useEffect, useState } from 'react'

const Contact = () => {
  let [data, setData]=useState(10)
  let [value, setValue]=useState(100)

  useEffect(()=>{
    console.log("API CAllING");
  },[value,data])
  
  return (
    <div>
      <h2>Data:{data}</h2>
      <h2>Value:{value}</h2>
      <button onClick={()=>setData(data+1)}>Update Data</button>
      <button onClick={()=>setValue(value+1)}>Update Value</button>

    </div>
  )
}

export default Contact




