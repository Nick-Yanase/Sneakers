import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandTwitter, IconBrandX, IconBrandYoutube, IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex-col flex px-4 border-t">
      <div className="w-full mx-auto max-w-screen-xl px-2 flex flex-wrap gap-8 justify-between">
        <div className="space-y-5 mt-10 ">
          <h3 className="text-black font-medium">Explore</h3>
          <ul className="text-zinc-700 text-sm space-y-3">
            <li>
              <Link href="#">Dashboard</Link>
            </li>
            <li>
              <Link href="#">Marketplace</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 mt-10">
          <h3 className="text-black font-medium">Learn & get help</h3>
          <ul className="text-zinc-700 text-sm space-y-3">
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Forum</Link>
            </li>
            <li>
              <Link href="#">Community</Link>
            </li>
            <li>
              <Link href="#">Developers</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
            <li>
              <Link href="#">Status</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 mt-10">
          <h3 className="text-black font-medium">Company</h3>
          <ul className="text-zinc-700 text-sm space-y-3">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Carrers</Link>
            </li>
            <li>
              <Link href="#">Sitemap</Link>
            </li>
            <li>
              <Link href="#">Become an Anfilliate</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 mt-10">
          <h3 className="text-black font-medium">Terms & policy</h3>
          <ul className="text-zinc-700 text-sm space-y-3">
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Cookie policy</Link>
            </li>
            <li>
              <Link href="#">Cokie preferences</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 mt-10">
          <h3 className="text-black font-medium">Terms & policy</h3>
          <ul className="text-zinc-700 text-sm space-y-3">
            <li>
              <Link href="#"><IconBrandYoutube/></Link>
            </li>
            <li>
              <Link href="#"><IconBrandX/></Link>
            </li>
            <li>
              <Link href="#"><IconBrandFacebook></IconBrandFacebook></Link>
            </li>
            <li>
              <Link href="#"><IconBrandInstagram></IconBrandInstagram></Link>
            </li>
            <li>
              <Link href="#"><IconBrandTiktok></IconBrandTiktok></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap mt-7 border-t mx-auto items-center justify-between gap-2 text-zinc-700 text-sm py-8 max-w-screen-xl w-full">
        
        <div className="flex gap-2 items-center">
          <span>Desenvolvido com </span>
          <span> <IconHeartFilled className="text-red-600 size-4"/> </span>
          <span>por Nicolas Yanase - {new Date().getFullYear()} </span>
        </div>
        <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/nicolas-yanase/" className="flex gap-2 items-center">
              <IconBrandLinkedin />
              <span>Nicolas Yanase</span>
            </a>
            <a href="https://github.com/Nick-Yanase" className="flex gap-2 items-center">
              <IconBrandGithub />
              <span>Nick-Yanase</span>
            </a>
        </div>
      </div>

    </footer>
  );
}
