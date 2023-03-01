import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Display() {

   const [data,setData] = useState(null)
    
    useEffect(()=>{
        const api = 'https://api.publicapis.org/entries'
        fetch(api).then(response=>response.json())
        .then(data =>setData(data))
        .catch(error=>console.log(error))
    },[])

    console.log(data)

  return (
    <div>
      <h1>{data ? data.count : 'data'}</h1>

      {data && data.entries.map(item => (
      <div key={item.id}>
        <h2>{item.API}</h2>
        <p>{item.Description}</p>
      </div>
    ))}
    </div>
  )
}

export default Display
