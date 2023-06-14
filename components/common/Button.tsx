import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react'


interface ButtonProps {
  type: string;
  children: React.ReactNode;
  href: string;
}

export const Button = ({ type, children, href }: ButtonProps) => {
  
  return (
    <Link
      href={href.toString()}
      className="group flex gap-2 font-medium px-[16px] py-[10px] text-sm bg-[#EBE8D6] hover:bg-[#bcbaab] rounded-full items-center w-full sm:w-fit justify-center sm:text-left"
    >
      <span className="text-[#3B371F] ">{children}</span>
      <Icon
        icon="teenyicons:arrow-right-solid"
        className="w-5 h-5 text-[#3B371F] hidden sm:inline-block group-hover:translate-x-1 duration-300"
      />
    </Link>
  );
};
