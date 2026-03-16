import Button from '../../../../components/base/Button/index'
import sendIcon from '../../../../assets/icons/sendarrow.png'
const LimitedOffer = () => {
    return (
        <section  className="bg-[linear-gradient(261.99deg,var(--color-gradient-start)_-18.97%,var(--color-gradient-middle)_43.5%,var(--color-gradient-end)_102.32%)] px-5.75 py-7.25 text-center text-(--white) md:py-12.5 ">
            <div>
            <div className='mb-6.25'>
                <p className='text-3xl font-bold md:text-[60px]'>Don't Miss Out: Limited-Time Offer!</p>
                <p className='text-[18px] mt-1.5 md:text-[38px] leading-[120%]'>
                    Enjoy 20% Off Your First Purchase With Code <strong>GLOW20</strong>
                </p>
            </div>
            <div>
            <p className='text-3xl leading-[120%] lg:text-[86px] md:text-[70px]'>
                Hurry, Offer Ends In 12hrs 30mins 56secs
            </p>
            </div>
            <div className='flex justify-center mt-6.5 md:mt-12.5'>
            <Button className='bg-(--white) flex text-(--black) items-center px-2 rounded-[44px] text-xl font-light md:text-[32px] md:px-5 md:py-2.5'>Shop the Sale <span><img className='ml-1 w-6.4' src={sendIcon} alt="" /></span></Button>
            </div>
            </div>
        </section>
    )
}

export default LimitedOffer
