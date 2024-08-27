import React from 'react'
import Hero from '../Hero/Hero'
import Subscrption from '../Subscrption/Subscrption'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import SuccessStories from '../SuccessStories/SuccessStories'
import CallToAction from '../CallToAction/CallToAction'
import FaqSupport from '../FaqandSupport/FaqSupport'
import WarrantyClaim from '../Warranty/WarrantyClaim'

const Sections = () => {
  return (
    <div>
       <Hero/>
       <WhyChooseUs/>
       <SuccessStories/>
       <WarrantyClaim/>
       <CallToAction/>
       <Subscrption/>
       <NewsLetter/>
       <FaqSupport/>
       <Footer/>
    </div>
  )
}

export default Sections
