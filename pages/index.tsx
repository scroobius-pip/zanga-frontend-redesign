import React from 'react'
import Layout from '../components/Layout'
import PropertyFilter from '../components/PropertyFilter'
import Card from '../components/Card'
import Button from '../components/Button'
import FeaturedPropertyCardSlider from '../components/FeaturedPropertyCardSlider'
import { getSession } from 'next-auth/client'
import WithSession from '../components/WithSession'



interface Props {
  session: Session
}

const Page = ({ session }: Props) => (
  <Layout session={session}>
    <div >
      <div className=' bg-cover mb-15 bg-no-repeat px-5 py-10' style={{ backgroundImage: 'linear-gradient(#23436182, #23436182), url(https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg)' }}>
        <h2 className='font-pop text-center font-medium text-4xl text-white py-10'>Find your ideal home</h2>
        <div className='max-w-screen-md m-auto '>

          <PropertyFilter />
        </div>
      </div>
      <p className='text-center font-bold font-pop text-blue text-3xl mt-10 p-2'>Get started with Zanga</p>
      <div className='grid max-w-4xl  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 m-auto w-full my-10'>


        <Card className='hover:-translate-y-3  cursor-pointer duration-300  transform flex flex-col sm:flex-row lg:flex-col'>
          <>

            <img className='m-auto max-w-xs sm:mr-10' src={require('../assets/images/wallet.svg')} />

            <div className='relative'>
              <span className='font-pop text-blue font-bold text-lg mt-5 flex'>
                <svg className='mr-2 fill-current hover:text-grey h-6 w-6' viewBox="0 0 15.765 14.451"><path d="M13.794,2.627V1.971A1.973,1.973,0,0,0,11.823,0H1.971A1.973,1.973,0,0,0,0,1.971V12.48a1.973,1.973,0,0,0,1.971,1.971H13.794a1.973,1.973,0,0,0,1.971-1.971V4.6A1.973,1.973,0,0,0,13.794,2.627ZM1.971,1.314h9.853a.658.658,0,0,1,.657.657v.657H1.971a.657.657,0,0,1,0-1.314ZM13.794,13.137H1.971a.658.658,0,0,1-.657-.657V3.829a1.964,1.964,0,0,0,.657.113H13.794a.658.658,0,0,1,.657.657V6.24H10.838a2.3,2.3,0,0,0,0,4.6h3.613V12.48a.658.658,0,0,1-.657.657Zm.657-3.613H12.914a2.277,2.277,0,0,0,0-1.971h1.539Zm-4.6-.985a.987.987,0,1,1,.985.985.987.987,0,0,1-.985-.985Zm0,0" fill="#234361" /></svg>
              Start Earning
            </span>
              <p className='font-pop text-blue font-bold mt-4'>Interested in a quick and easy way to making money ?</p>
              <p className='font-pop text-blue mt-2'>
                Get paid for connecting your friends, family and
                followers to their ideal homes and property.
            </p>
              <a href='/earn-login'>
                <Button className='mt-5' variant='primary' text='Start Earning' icon='Right' onClick={() => { }} />
              </a>
              <svg className='absolute w-2/5 md:w-2/6 bottom-0 right-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.699 96.699"><g opacity="0.07"><path d="M19.831,151A19.821,19.821,0,0,0,6.352,185.363a15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.624,0,15.661,15.661,0,0,1,9.166,7.212A19.821,19.821,0,0,0,19.831,151Z" transform="translate(0 -122.481)" fill="#234361" /><path d="M67.219,321.479a9.932,9.932,0,0,0-8.8,5.4,19.8,19.8,0,0,0,17.594,0A9.932,9.932,0,0,0,67.219,321.479Z" transform="translate(-47.388 -260.763)" fill="#234361" /><ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(17.35 45.35)" fill="#234361" /><path d="M308.352,34.363a15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.625,0,15.661,15.661,0,0,1,9.166,7.212,19.831,19.831,0,1,0-26.957,0Z" transform="translate(-244.963)" fill="#234361" /><path d="M360.422,175.882a19.8,19.8,0,0,0,17.594,0,9.863,9.863,0,0,0-17.594,0Z" transform="translate(-292.351 -138.281)" fill="#234361" /><circle cx="2.5" cy="2.5" r="2.5" transform="translate(74.35 17.35)" fill="#234361" /><path d="M321.831,302a19.821,19.821,0,0,0-13.479,34.363,15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.625,0,15.661,15.661,0,0,1,9.166,7.212A19.821,19.821,0,0,0,321.831,302Z" transform="translate(-244.963 -244.963)" fill="#234361" /><path d="M369.219,472.478a9.932,9.932,0,0,0-8.8,5.4,19.8,19.8,0,0,0,17.594,0A9.932,9.932,0,0,0,369.219,472.478Z" transform="translate(-292.351 -383.243)" fill="#234361" /><circle cx="2.5" cy="2.5" r="2.5" transform="translate(74.35 74.35)" fill="#234361" /><path d="M213.64,146.511a25.514,25.514,0,0,1,2.84,4.9l11.125-6.423a25.318,25.318,0,0,1-2.09-5.336Z" transform="translate(-173.291 -113.279)" fill="#234361" /><path d="M213.64,314.989l11.875,6.856a25.324,25.324,0,0,1,2.09-5.336l-11.125-6.423A25.5,25.5,0,0,1,213.64,314.989Z" transform="translate(-173.291 -251.521)" fill="#234361" /></g></svg>
            </div>
          </>
        </Card>
        <Card className='hover:-translate-y-3 cursor-pointer duration-300  transform flex flex-col sm:flex-row lg:flex-col'>
          <>

            <img className='m-auto max-w-xs sm:mr-10' src={require('../assets/images/advertise.svg')} />

            <div className='relative'>
              <span className='font-pop text-blue font-bold text-lg mt-5 flex'>
                <svg className='mr-2 fill-current hover:text-grey h-6 w-6' viewBox="0 0 14.312 13.817"><path d="M11.672,16.191a14.684,14.684,0,0,0-6.117,1.6L3.177,19.164a1.314,1.314,0,0,1-1.793-.481L.175,16.591A1.314,1.314,0,0,1,.656,14.8l1.97-1.138a.239.239,0,0,1,.326.087L4.5,16.429a.239.239,0,0,0,.332.084.245.245,0,0,0,.076-.331l-1.559-2.7a.238.238,0,0,1,.07-.315A14.68,14.68,0,0,0,7.478,8.928a1,1,0,0,1,1.709.033L12.5,14.694A1,1,0,0,1,11.672,16.191ZM12.1,12.2a1.493,1.493,0,0,0-.953-1.645.239.239,0,0,0-.287.344l.8,1.382A.239.239,0,0,0,12.1,12.2ZM6.59,20.639,5.458,18.674a.239.239,0,0,0-.326-.087l-1.455.84a.239.239,0,0,0-.087.326l1.134,1.964A.775.775,0,0,0,5.4,22.1c.258,0,.357-.087.91-.406A.776.776,0,0,0,6.59,20.639Zm7.248-10.254a.239.239,0,0,0-.239-.413l-.617.356a.239.239,0,0,0,.12.445C13.186,10.773,13.169,10.771,13.838,10.385ZM11.644,9.149l.151-.562a.239.239,0,1,0-.461-.123l-.151.562a.239.239,0,1,0,.461.123ZM14.3,12.932a.239.239,0,0,0-.169-.292l-.562-.15a.239.239,0,1,0-.123.461,3.867,3.867,0,0,0,.624.159.239.239,0,0,0,.23-.177Z" transform="translate(0 -8.287)" fill="#234361" /></svg>

                Advertise Property
            </span>
              <p className='font-pop text-blue font-bold mt-4'>How fast would you find a client with 250,000 promoters ?</p>
              <p className='font-pop text-blue mt-2'>
                Advertise your property for free on our platform, and reach more audience than traditional channels
            </p>
              <a href='/listing-login'>

                <Button className='mt-5' variant='primary' text='List Property' icon='Right' onClick={() => { }} />
              </a>
              <svg style={{ zIndex: -20 }} className='absolute w-2/5 md:w-2/6 bottom-0 right-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.712 103.028"><path d="M87.027,67.223a109.491,109.491,0,0,0-45.61,11.932L23.687,89.394A9.8,9.8,0,0,1,10.319,85.81l-9.011-15.6A9.8,9.8,0,0,1,4.892,56.839l14.69-8.482a1.779,1.779,0,0,1,2.43.651L33.554,69a1.779,1.779,0,0,0,2.475.624,1.827,1.827,0,0,0,.569-2.466L24.972,47.02a1.776,1.776,0,0,1,.524-2.347A109.463,109.463,0,0,0,55.762,13.068a7.445,7.445,0,0,1,12.746.249L93.183,56.061A7.444,7.444,0,0,1,87.027,67.223Zm3.166-29.77a11.129,11.129,0,0,0-7.1-12.268,1.779,1.779,0,0,0-2.142,2.564q2.956,5.121,5.948,10.3A1.781,1.781,0,0,0,90.194,37.454ZM49.137,100.387,40.7,85.736a1.78,1.78,0,0,0-2.431-.652c-4.574,2.639-4.747,2.742-10.849,6.264a1.78,1.78,0,0,0-.652,2.43l8.455,14.642a5.779,5.779,0,0,0,5.018,2.895c1.925,0,2.662-.651,6.783-3.03A5.787,5.787,0,0,0,49.137,100.387ZM103.18,23.93A1.779,1.779,0,0,0,101.4,20.85l-4.6,2.657a1.781,1.781,0,0,0,.891,3.319C98.323,26.826,98.2,26.808,103.18,23.93ZM86.825,14.714l1.122-4.188a1.779,1.779,0,1,0-3.436-.921l-1.122,4.188a1.779,1.779,0,1,0,3.436.921Zm19.826,28.208a1.779,1.779,0,0,0-1.258-2.178l-4.188-1.122a1.779,1.779,0,1,0-.921,3.436c4.58,1.227,4.329,1.183,4.649,1.183a1.78,1.78,0,0,0,1.717-1.319Z" transform="translate(0 -8.287)" fill="#e3e9ec" opacity="0.4" /></svg>
            </div>
          </>
        </Card>



      </div>
      <section className='max-w-screen-sm mt-20 m-auto mb-48'>

        <h3 className='text-center font-bold font-pop text-blue text-3xl'>Featured Property</h3>
        <p className='text-center  font-pop text-blue text-base '>Trusted and beautiful properties in Nigeria</p>
        <FeaturedPropertyCardSlider properties={[
          {
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum deserunt adipisci ipsum cumque dignissimos est provident dolores rem recusandae.',
            id: 'sda',
            image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
            price: '₦ 300.000.00',
            title: 'Duplex in wuye, abuja'
          },
          {
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum deserunt adipisci ipsum cumque dignissimos est provident dolores rem recusandae.',
            id: 'sda',
            image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
            price: '₦ 300.000.00',
            title: 'Duplex in wuye, abuja'
          },
          {
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum deserunt adipisci ipsum cumque dignissimos est provident dolores rem recusandae.',
            id: 'sda',
            image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
            price: '₦ 300.000.00',
            title: 'Duplex in wuye, abuja'
          },
          {
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum deserunt adipisci ipsum cumque dignissimos est provident dolores rem recusandae.',
            id: 'sda',
            image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
            price: '₦ 300.000.00',
            title: 'Duplex in wuye, abuja'
          },

        ]} />
        <div className='flex sm:justify-end justify-center'>


          <Button
            className='text-right'
            text='More Properties'
            onClick={() => { }}
            icon='Right'
            variant='secondary'
          />
        </div>
      </section>
    </div>


  </Layout>
)


export default WithSession(Page)
