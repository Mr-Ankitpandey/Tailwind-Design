
type UserCardProps = {
    imageSrc?: string
    title: string
    review: string
    reviewer: string
}
const UserCard = ({ imageSrc = '', title, review, reviewer }: UserCardProps) => {
    return (
        <div className="flex flex-col gap md:gap-5 items-center bg-white rounded-xl py-6.5 lg:px-5">
            <div className=" ">
                {imageSrc && <img className="rounded-full md:w-25 md:h-25 w-19 h-19 " src={imageSrc} alt={reviewer} />}
            </div>
            <div className="px-4 text-xl">
            <p className="my-2.5 font-normal text-center md:text-left lg:text-[24px]">{title}</p>
            <p className="my-2.5 leading-7 font-light lg:text-[24px] lg:leading-[150%]">
                {review} <span className="font-medium">{reviewer}</span>
            </p>
            </div>
        </div>
    )
}

export default UserCard
