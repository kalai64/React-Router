import React from 'react'
import Card from './Card'

function Datascience({lists}) {

  let dataScienceData = lists.filter(item=>item.head === "Data Science")

  return <>
  <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5">

    {
      dataScienceData.map((cardData,i)=>{

        return<Card cardData={cardData} key={i}/>
      })
    }

  </div>
  </>
}

export default Datascience