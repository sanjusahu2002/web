
import Hero from '../Components/Hero/Hero'
import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter />
    </div>
  )
}

export default Shop