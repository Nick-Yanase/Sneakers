import Link from "next/link";

export default function Logo(){
  return(
  <Link href="/">
    <img src="/img/logo.svg" alt="Sneakers" />
  </Link>
  )
}