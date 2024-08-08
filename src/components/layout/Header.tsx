'use client'
import Link from "next/link";
import Logo from "./Logo";
import { IconMenu2, IconShoppingCart, IconX } from "@tabler/icons-react";
import Avatar from "./Avatar";
import useCart from "@/data/hooks/useCart";
import ProductCartPreview from "../Product/ProductCartPreview";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { quantityProducts, previewModalAberto, abrirModalPreview } = useCart();
  const [menuMobile, setMenuMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function mobileOn() {
    setMenuMobile(true);
  }

  function mobileOff() {
    setMenuMobile(false);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
      mobileOff();
    }
  };

  useEffect(() => {
    if (menuMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuMobile]);

  return (
    <header className="w-full px-4 fixed z-50 bg-white">
      <nav className="w-full items-center max-w-screen-xl mx-auto py-4 flex gap-4 md:gap-12 md:border-b-2 relative">
        <button onClick={mobileOn} className="md:hidden mb-1">
          <IconMenu2 className="text-zinc-600"/>
        </button>
        {
          menuMobile && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-start z-40">
              <div ref={menuRef} className="transition-all ease-linear md:hidden space-y-5 w-8/12 bg-white h-screen z-50 p-6">
                <button onClick={mobileOff}>
                  <IconX className="text-zinc-600 hover:text-red-500 transition-all "/>
                </button>
                <ul className="flex flex-col gap-6 font-bold text-zinc-900">
                  <li className="">
                    <Link href="#">Collections</Link>
                  </li>
                  <li className="">
                    <Link href="#">Men</Link>
                  </li>
                  <li className="">
                    <Link href="#">Women</Link>
                  </li>
                  <li className="">
                    <Link href="#">About</Link>
                  </li>
                  <li className="">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          )
        }
        
        <div className="mb-2 flex-1 md:flex-none">
          <Logo />
        </div>
        <ul className="hidden md:flex gap-8 flex-1 text-zinc-500 text-sm items-start mt-8">
          <li className="h-14 flex items-start hover:text-zinc-900 transition hover:border-b-[3px] border-orange-400">
            <Link href="#">Collections</Link>
          </li>
          <li className="h-14 flex items-start hover:text-zinc-900 transition hover:border-b-[3px] border-orange-400">
            <Link href="#">Men</Link>
          </li>
          <li className="h-14 flex items-start hover:text-zinc-900 transition hover:border-b-[3px] border-orange-400">
            <Link href="#">Women</Link>
          </li>
          <li className="h-14 flex items-start hover:text-zinc-900 transition hover:border-b-[3px] border-orange-400">
            <Link href="#">About</Link>
          </li>
          <li className="h-14 flex items-start hover:text-zinc-900 transition hover:border-b-[3px] border-orange-400">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 md:gap-8 mb-2">
          <button 
            onMouseEnter={abrirModalPreview}
            className="relative"
          >
            <span className="absolute w-6 y-3 bg-orange-500 rounded-full text-xs flex items-center justify-center -top-2.5 -right-2.5">{quantityProducts}</span>
            <Link href="/cart">
              <IconShoppingCart className="text-black size-6 stroke-[1.3]" />
            </Link>
          </button>
          <Avatar />
        </div>

        {previewModalAberto && (
         <ProductCartPreview />
        )}
      </nav>
    </header>
  );
}
