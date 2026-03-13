
type UserCardProps = {
    imageSrc?: string
    title: string
    review: string
    reviewer: string
}
const UserCard = ({ imageSrc = '', title, review, reviewer }: UserCardProps) => {
    return (
        <div className="flex flex-col gap items-center bg-white rounded-xl py-6.5">
            <div className=" ">
                {imageSrc && <img className="rounded-full md:w-25 h:25 w-18 h-18 object-cover" src={imageSrc} alt={reviewer} />}
            </div>
            <div className="px-4 text-xl">
            <p className="my-2.5 font-bold text-center md:text-left">{title}</p>
            <p className="my-2.5 leading-7 font-light">
                {review} <span className="font-bold">{reviewer}</span>
            </p>
            </div>
        </div>
    )
}

export default UserCard
