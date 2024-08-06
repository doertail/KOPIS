import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import MySlider from '../Components/Slider/Slider'



export const Home = () => {
  return (
    <div>
        <MySlider />
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
    </div>
  )
}
