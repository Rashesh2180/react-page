import React from 'react'
import HomeHero from '../../components/home/homeHero/HomeHero'
import FeatureList from '../../components/home/featureList/FeatureList'
import VideoBanner from '../../components/home/videoBanner/VideoBanner'
import DownloadForm from '../../components/home/downloadForm/DownloadForm'
import ChooseCard from '../../components/home/chooseCard/ChooseCard'
import ImageBanner from '../../components/home/imageBanner/ImageBanner'
import HowItWork from '../../components/home/howItWork/HowItWork'
import TestiMonial from '../../components/home/testimonial/TestiMonial'
import Client from '../../components/clients/Client'
import Feature from '../../components/home/feature/Feature'
import ContactUs from '../../components/home/contactUs/ContactUs'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <section>
        <HomeHero/>
        <FeatureList/>
        <VideoBanner/>
        <DownloadForm/>
        <ChooseCard/>
        <ImageBanner/>
        <HowItWork/>
        <TestiMonial/>
        <Client/>
        <Feature/>
        <ContactUs/>
        <Footer/>
      
    </section>
  )
}

export default Home
