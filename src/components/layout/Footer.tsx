import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4">
      <div className="w-full mx-auto max-w-screen-xl border-t  flex flex-wrap gap-8 justify-between">
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
              <Link href="#">University</Link>
            </li>
            <li>
              <Link href="#">Courses</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Ebooks</Link>
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
    </footer>
  );
}
