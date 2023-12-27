import React from 'react'
import Card from './Card'

function Career({lists}) {

let car = lists.filter(item=>item.head === "Career")

  return <>
  <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5">

{
  car.map((cardData,i)=>{

    return <Card cardData={cardData} key={i}/>

  })
}

  </div>
  </>
}

export default Career