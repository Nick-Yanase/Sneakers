import Image from "next/image";
import Link from "next/link";

export default function Logo(){
  return(
  <Link href="/">
    <div className="relative w-36 h-5" >
      <Image src="/img/logo.svg" alt="Sneakers" fill className="object-cover" />
    </div>
  </Link>
  )
}