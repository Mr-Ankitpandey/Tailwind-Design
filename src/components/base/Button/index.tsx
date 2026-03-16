type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
const Button = ({ children, className }: ButtonProps) => {
  return <button className={`cursor-pointer hover:bg-neutral-700 ${className}`}>{children}</button>;
};
export default Button;
