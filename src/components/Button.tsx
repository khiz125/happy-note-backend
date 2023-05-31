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
  variant = "primary",
  ...props
}: ButtonProps) => {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = `border-gray-200 bg-[#F0F8FF] py-2 w-full border-2 rounded-[20px] text-[#333] hover:bg-[#61C697] hover:border-[#61C697] ${addClassName}`;
      break;
    case "light-gray":
      btnStyle = `border-2 border-gray-200 bg-[#BABABA] py-3 w-full rounded-[20px] text-white ${addClassName}`;
      break;
    case "lemon-chiffon":
      btnStyle = `border-2 border-gray-200 bg-[#FFFACD] py-3 w-full rounded-[20px] text-[#333] ${addClassName}`;
      break;
  }

  return (
    <button className={className || btnStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;