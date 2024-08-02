import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='prakhar' caption='dev.' className='logobg' />
          <h4 className='hero-desc'>Building my Startup</h4>
          <h1 className='hero-title'>"FREELANCER DIGITECH"</h1>
          <h4 className='hero-sd'>We transform your brand vision into tangible web, graphic and video experiences that stop prospective clients in their tracks </h4>

          <div className='sub-heading'>
            <TitleSm title='E-COMMERCE WEBSITE DEVELOPMENT' /> <span>.</span>
            <TitleSm title='WORDPRESS WEBSITE DEVELOPMENT' /> <span>.</span>
            <TitleSm title='SHOPIFY STORE DEVELOPMENT' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' /> <span>.</span>
            <TitleSm title='GRAPHIC DESIGNING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='About our company' />
            <p>We are complete one solution for an emerging business to becoming a sucessful brand. 
              We provide services like Website Development, Customized software, Shopify Store, Automation Services, Digital Marketing, SEO, Graphic Designing, Influencer Marketing, Whatsapp leads. </p>
          </div> 
          <div className='profile'>
            <img scr='../public/images/img1.jpeg'  alt="image"/>
          </div>
          
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
