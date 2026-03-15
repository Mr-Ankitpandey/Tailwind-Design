import Button from '../../../../../components/base/Button/index'
import HeartIcon from '../../../../../assets/icons/heart.svg'
import BagIcon from '../../../../../assets/icons/bag-2.png'

type ProductCardProps = {
    badge: string,
    name: string,
    originalPrice: string,
    salePrice: string,
    imageSrc?: string
}

const ProductCard = ({ badge, name, originalPrice, salePrice, imageSrc = '' }: ProductCardProps) => {
    return (
        <div className='border border-[#f0f0f0] rounded-[10px] md:border-[#eaeaea] md:rounded-lg'>
            <div className='bg-[#f0f0f0] px-4 pt-7.5 md:px-5 md:pt-8.75 '>
                <div className='flex justify-between items-start'>
                    <div className='md:flex md:flex-col md:gap-1.75'>
                        <span className='block md:text-[20px] font-bold'>{badge}</span>
                        <span className='text-[#ffa44c] md:text-[20px] md:-mt-1'>★★★★★</span>
                    </div>
                    <Button className='md:w-[40px] md:h-[40px] md:flex md:items-center md:justify-center'>
                        <img className="md:w-[40px] md:h-[40px]" src={HeartIcon} alt="wishlist" />
                    </Button>
                </div>
                <div className='flex justify-center items-center max-h-[268px] md:h-[220px] md:mt-2'>
                    {imageSrc && <img className='text-center max-h-[268px] md:max-h-[200px] md:object-contain' src={imageSrc} alt={name} />}
                </div>
            </div>
            <div className='flex justify-between items-center px-4 py-6.5 lg:px-5 lg:py-5 h-[86px] lg:h-auto md:bg-white'>
                <div className='text-[13px] lg:text-[16px] md:flex md:flex-col md:gap-1'>
                    <p className=''>{name}</p>
                    <div className='flex gap-2 md:items-center md:gap-1.5'>
                        <span className='line-through text-[#cccccc] md:text-[#aaa] lg:text-[16px]'>{originalPrice}</span>
                        <span className='md:text-black md:font-semibold lg:text-[16px]'>{salePrice}</span>
                    </div>
                </div>
                <Button className='flex px-2 py-2 bg-black text-white items-center rounded-[40px] font-light lg:px-4 lg:py-1.5 lg:text-[16px] md:text-[13px]'>
                    Add to Cart
                    <img className='ml-4 invert w-6.5 md:ml-1.5 md:w-[25px]' src={BagIcon} alt="cart" />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
