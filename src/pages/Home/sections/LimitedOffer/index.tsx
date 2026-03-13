import Button from '../../../../components/base/Button/index'
import sendIcon from '../../../../assets/icons/sendarrow.png'
const LimitedOffer = () => {
    return (
        <section  className="bg-[linear-gradient(261.99deg,#D1068C_-18.97%,#1310A6_43.5%,#7E1B5C_102.32%)] px-5.75 py-7.25 text-center text-white ">
            <div>
            <div className='mb-6.25'>
                <p className='text-3xl font-bold'>Don't Miss Out: Limited-Time Offer!</p>
                <p className='text-[18px] mt-1.5'>
                    Enjoy 20% Off Your First Purchase With Code <strong>GLOW20</strong>
                </p>
            </div>
            <div>
            <p className='text-3xl leading-[120%]'>
                Hurry, Offer Ends In 12hrs 30mins 56secs
            </p>
            </div>
            <div className='flex justify-center mt-6.5 md:mt-12.5'>
            <Button className='bg-[#ffffff] flex text-black items-center px-2 rounded-[44px] text-xl font-light'>Shop the Sale <span><img className='ml-1 w-6.4' src={sendIcon} alt="" /></span></Button>
            </div>
            </div>
        </section>
    )
}

export default LimitedOffer
