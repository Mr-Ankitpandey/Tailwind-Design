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
        <div className='border border-[#f0f0f0] rounded-[10px]'>
            <div className='bg-[#f0f0f0] px-4 pt-7.5'>
                <div className='flex justify-between'>
                    <div className=''>
                        <span className='block font-normal'>{badge}</span>
                        <span className='text-[#ffa44c]'>★★★★★</span>
                    </div>
                    <Button>
                        <img src={HeartIcon} alt="wishlist" />
                    </Button>
                </div>
                <div className='flex justify-center items-center'>
                    {imageSrc && <img className='text-center max-h-[305px]' src={imageSrc} alt={name} />}
                </div>
            </div>
            <div className='flex justify-between px-4 py-6.5'>
                <div className='text-[13px]  md:text[16px]'>
                    <p>{name}</p>
                    <div className='flex gap-2'>
                        <span className='line-through text-[#cccccc]'>{originalPrice}</span>
                        <span>{salePrice}</span>
                    </div>
                </div>
                <Button className='flex px-2 py-2 bg-black text-white items-center rounded-4xl font-light '>
                    Add to Cart
                    <img className='ml-4 invert w-6.5' src={BagIcon} alt="cart" />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
