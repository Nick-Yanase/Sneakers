import Image from "next/image";
import Link from "next/link";

export default function Avatar(){
  return(
    <Link href="#">
      <div className="rounded-full size-12 relative overflow-hidden hover:border-2 transition border-orange-500">
        <Image src="/img/nick.png" alt="User icon" fill className="object-cover"/>
      </div>
    </Link>
  )
}