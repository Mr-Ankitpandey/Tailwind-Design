
import { USERS_DETAILS } from '../../../../constants/USER'
import UserCard from './UserCard/index'

const Testimonial = () => {
    return (
        <section className='px-5.75 py-8 bg-[#f0f0f0]'>
            <h2 className='text-3xl'>Testimonial</h2>
            <div className='flex flex-col gap-2.5 mt-7.5 md:mt-12.5'>
                {USERS_DETAILS?.map((t) => (
                    <UserCard
                        key={t.reviewer}
                        imageSrc={t.imageSrc}
                        title={t.title}
                        review={t.review}
                        reviewer={t.reviewer}
                    />
                ))}
            </div>
        </section>
    )
}
export default Testimonial
