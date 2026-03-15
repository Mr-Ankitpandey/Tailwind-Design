import Button from '../../../../components/base/Button/index'
const Footer = () => {
  return (
    <div className='bg-[#121212] text-white flex justify-center' id='contact'>
        <div className='pt-11.5 pb-7 md:w-full'>
      <div className='flex flex-col items-center md:flex-row gap-3 pl-[43px] pr-[63px] md:justify-center md:gap-7 md:px-0' >
        <div className='md:px-0'>
            <p className='text-[18px] text-center font-extralight leading-[100%] md:text-center md:text-[18px] md:leading-[100%] md:max-w-[240px]'>Be the first to get notification about our upcoming event</p>
        </div>
        <div className='flex bg-white justify-between px-1 py-1 rounded-[5px] md:bg-[#eeeeee] md:w-[320px] md:max-w-[50%]'>
            <input className='pl-6 border-none text-black md:text-[16px]'  type="email" placeholder="Email" />
            <Button className='bg-black text-white px-3 py-3 rounded-[5px] font-light md:py-2 md:px-6 md:text-[16px]'>Submit</Button>
        </div>
      </div>
      <hr className='w-full border  bg-white mt-11.5 mb-6 md:mt-10' />
      <div>
        <p className='text-[11px] leading-[120%] md:text-[15px] font-extralight text-center'>© 2024, Xtragleam Skincare. All Right Reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
