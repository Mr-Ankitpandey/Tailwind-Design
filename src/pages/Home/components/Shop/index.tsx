import { PRODUCTS } from '../../../../constants/products'
import ProductCard from './ProductCard'

const Shop = () => {
    return (
        <section className='flex flex-col gap-6 md:gap-8.5 py-7.5 md:py-0' id='shop'>
            <div className='flex justify-between text-xl md:items-end md:mb-2' >
                <h2 className='text-xl lg:text-[50px] md:text-[30px]'>Discover Our Best-Sellers</h2>
                <a href="/shop" className=' font-light underline lg:text-[30px] md:text-[25px]'>View all</a>
            </div>
            <div className='flex flex-col gap-4.25 md:grid md:grid-cols-3 lg:gap-4.75 md:gap-2'>
                {PRODUCTS?.map((product) => (
                    <ProductCard
                        key={product.name}
                        badge={product.badge}
                        name={product.name}
                        originalPrice={product.originalPrice}
                        salePrice={product.salePrice}
                        imageSrc={product.imageSrc}
                    />
                ))}
            </div>
        </section>
    )
}

export default Shop
