import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='about bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT WORK' /> <br />
            <br />
            <Title title='Past work experience of our projects' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='About the development i know and how i contibute in your company' />
              <p className='desc-p'>I have taken part in various hackathon , tech events, explore many technology, had expertiese in web3,blockchain and AI tools, Had well knowledbge of programming skills like python, java script, java, C also had tried app development by using technologies like flutter, kotlin, swift UI, android studio. I am also open source contributer and fast learner. </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>15+</h1>
                  <h3>Successful projects</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Community members</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/img1.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/img2.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='My mission' />
              <br />
              <p className='misson-p'>My mission is to build an mazing product in IT industry which solve the problem of various tech students. My vision is to develop application and website and provide amazing product to IT industry, Using AI and Web3 technology build amazing softwares.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
