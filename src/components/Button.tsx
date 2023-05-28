import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClassName?: string;
  variant?:
    | "primary"
    | "light-gray"
}
const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = `border-gray-200 bg-green-300 py-3 w-full border-2 rounded-[20px] text-white hover:bg-[#61C697] hover:border-[#61C697]`;
      break;
    case "light-gray":
      btnStyle = `bg-[#BABABA] py-3 w-full rounded-[20px] text-white`;
      break;
  }

  return (
    <button className={className || btnStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;