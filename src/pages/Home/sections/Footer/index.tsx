import Button from '../../../../components/base/Button/index'
const Footer = () => {
  return (
    <div className='bg-[#121212] text-white flex justify-center' id='contact'>
        <div className='pt-11.5 pb-7'>
      <div className='flex flex-col md:flex-row gap-3 px-46' >
        <div>
            <p className='text-[18px] text-center font-extralight leading-[100%]'>Be the first to get notification about our upcoming event</p>
        </div>
        <div className='flex bg-white px-1 py-1 rounded-[5px]'>
            <input className='text-[#575454] pl-2 border-none'  type="email" placeholder="Email" />
            <Button className='bg-black text-white px-1 py-1 rounded-[5px] font-light'>Submit</Button>
        </div>
      </div>
      <hr className='w-full bg-white mt-11.5 mb-6 md:mt-10' />
      <div>
        <p className='text-[11px] md:text-[16px] font-extralight text-center'>© 2024, Xtragleam Skincare. All Right Reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
