import Link from "next/link";
import Logo from "./Logo";
import { IconShoppingCart } from "@tabler/icons-react";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="w-full px-4 fixed z-10 bg-white">
      <nav className="w-full items-center max-w-screen-xl mx-auto flex gap-12 border-b-2">
        <div className="mb-2">
          <Logo />
        </div>
        <ul className="flex gap-8 flex-1 text-zinc-500 text-sm items-start mt-8">
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
        <div className="flex items-center gap-6 mb-2">
          <button className="relative">
            <span className="absolute w-6 y-3 bg-orange-500 rounded-full text-xs flex items-center justify-center -top-2.5 -right-2.5">99</span>
            <IconShoppingCart className="text-black size-6 stroke-[1.3]" />
          </button>
          <Avatar />
        </div>
      </nav>
    </header>
  );
}
