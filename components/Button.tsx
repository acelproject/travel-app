import Image from "next/image";
import React from "react";

const Button = ({
  type,
  title,
  icon,
  variant,
  full
}: {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}) => {
  return (
    <button type={type} className={`flexCenter gap-x-3 rounded-full border ${variant}`}>
      {icon &&  <Image src={icon} alt={title} width={24} height={24}/>}
      <label htmlFor="" className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
