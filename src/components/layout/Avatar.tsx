import Link from "next/link";

export default function Avatar(){
  return(
    <Link href="#">
      <div className="rounded-full size-12 relative overflow-hidden hover:border-2 transition border-orange-500">
        <img src="/img/nick.png" alt="User icon" className="object-cover"/>
      </div>
    </Link>
  )
}