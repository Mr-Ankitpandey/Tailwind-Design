import Button from '../../../../../components/base/Button/index'
import HeartIcon from '../../../../../assets/icons/heart.svg'
import BagIcon from '../../../../../assets/icons/bag.png'

type ProductCardProps = {
    badge: string,
    name: string,
    originalPrice: string,
    salePrice: string,
    imageSrc?: string
}

const ProductCard = ({ badge, name, originalPrice, salePrice, imageSrc = '' }: ProductCardProps) => {
    return (
        <div className='border border-neutral-200 rounded-[10px]  md:rounded-lg'>
            <div className='bg-neutral-200 px-4 pt-7.5 md:px-5 md:pt-8.75 '>
                <div className='flex justify-between items-start'>
                    <div className='md:flex md:flex-col md:gap-1.75'>
                        <span className='block md:text-[20px] font-bold'>{badge}</span>
                        <span className='text-primary md:text-[20px] md:-mt-1'>★★★★★</span>
                    </div>
                    <Button className='md:flex md:items-center md:justify-center'>
                        <img className="md:w-10 md:h-10" src={HeartIcon} alt="wishlist" />
                    </Button>
                </div>
                <div className='flex justify-center items-center max-h-67 md:h-55 md:mt-2'>
                    {imageSrc && <img className='text-center max-h-67 md:max-h-55 ' src={imageSrc} alt={name} />}
                </div>
            </div>
            <div className='flex justify-between items-center px-4 py-6.5 md:px-2 lg:px-5 lg:py-5 h-21.5 lg:h-auto md:bg-white'>
                <div className='text-[13px] lg:text-[16px] md:flex md:flex-col md:gap-1'>
                    <p className=''>{name}</p>
                    <div className='flex gap-2 md:items-center md:gap-1.5'>
                        <span className='line-through text-neutral-500 lg:text-[16px]'>{originalPrice}</span>
                        <span className='md:font-semibold lg:text-[16px]'>{salePrice}</span>
                    </div>
                </div>
                <Button className='flex px-2 py-2 bg-black text-white items-center rounded-[40px] font-light md:py-1 lg:px-4 lg:py-1.5 lg:text-[16px] md:text-[13px]'>
                    Add to Cart
                    <img className='ml-4 invert w-6.5 md:ml-1.5 md:w-6.25' src={BagIcon} alt="cart" />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
