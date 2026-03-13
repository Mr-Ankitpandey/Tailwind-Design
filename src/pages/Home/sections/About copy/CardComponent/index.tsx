type CardProps = {
  h3: string;
  p: string;
}

const Card = ({ h3, p }: CardProps) => {
  return (
    <div className="max-w-[50%] px-6 py-6 bg-[#fafafa] rounded-sm">
      <h3 className="text-[24px] font-bold">{h3}</h3>
      <p className="text-[16px]">{p}</p>
    </div>
  )
}

export default Card
