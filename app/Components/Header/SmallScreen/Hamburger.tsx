"use client";
import React, { useState } from 'react'

interface HamburgerMenuProps {
  toggleMenu: () => void;
  changeIcon: boolean;
  toggleIcon: () => void;
}

const Hamburger = ({toggleMenu, changeIcon, toggleIcon}:HamburgerMenuProps) => {

  return (
    <div className="cursor-pointer h-9 w-10 relative ml-auto" onClick={() => {toggleIcon(); toggleMenu();}}>
      <span className={`block bg-gray-950 h-0.5 w-6 rounded-md absolute top-2 right-2 transform transition-transform duration-500 ${changeIcon ? 'rotate-[-315deg] translate-y-2' : 'rotate-0 translate-y-0'}`}></span>
      <span className={
        `block bg-gray-950 h-0.5 w-6 absolute top-4 right-2 transition-opacity duration-[1000ms] ease-out  ${changeIcon ? 'opacity-0' : 'opacity-100'}`
        }></span>
      <span className={`block bg-gray-950 h-0.5 w-6 rounded-md absolute top-6 right-2 transform transition-transform duration-500 ${changeIcon ? 'rotate-[-405deg] -translate-y-2' : 'rotate-0 translate-y-0'}`}></span>
    </div>
  )
}

export default Hamburger

