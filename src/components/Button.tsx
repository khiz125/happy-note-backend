import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClassName?: string;
  variant?:
  | "primary"
  | "light-gray"
  | "lemon-chiffon"
}
const Button = ({
  className,
  addClassName,
  children,
  type,
  variant = "primary",
  ...props
}: ButtonProps) => {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = `border-gray-200 bg-[#F0F8FF] py-2 w-full border-2 rounded-[20px] text-[#333] hover:bg-[#61C697] hover:text-white hover:border-[#61C697] ${addClassName}`;
      break;
    case "light-gray":
      btnStyle = `border-2 border-gray-200 bg-[#BABABA] py-3 w-full rounded-[10px] text-white hover:bg-[#778899] ${addClassName}`;
      break;
    case "lemon-chiffon":
      btnStyle = `border-2 border-gray-200 bg-[#FFFACD] py-3 w-full rounded-[10px] text-[#333] hover:bg-[#DAA520] hover:text-white ${addClassName}`;
      break;
  }

  return (
    <button className={className || btnStyle} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;