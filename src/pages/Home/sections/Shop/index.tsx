import { PRODUCTS } from '../../../../constants/PRODUCTS'
import ProductCard from './ProductCard'

const Shop = () => {
    return (
        <section id='shop'>
            <div className='flex justify-between my-7.5 text-xl' >
                <h2>Discover Our Best-Sellers</h2>
                <a href="/shop" className=' font-light underline'>View all</a>
            </div>
            <div className='flex flex-col gap-4.25'>
                {PRODUCTS.map((product) => (
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
