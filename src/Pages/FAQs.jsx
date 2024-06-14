import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import FAQs from '../Components/FAQs/FAQs'
import "./../index.css"

export default function fAQs() {
  return (
    <div>
    <BreadCrumbs />
    <div className='Project-Container'>
       <FAQs/>
       </div>
    </div>
  )
}
