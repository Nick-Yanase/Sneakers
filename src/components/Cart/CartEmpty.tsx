import { IconShoppingCartOff } from "@tabler/icons-react";
import Button from "../Button";
import Link from "next/link";

export default function CartEmpty() {
  return(
  <div className="w-96 p-4 flex flex-col gap-4 items-center justify-center">
    <div className="w-6/12 ">
      <IconShoppingCartOff className="text-zinc-500 size-full stroke-1" />
    </div>
    <h4 className="text-zinc-600 font-semibold">Your cart is empty</h4>

    <Link href="/" className="w-full">
      <Button>View Products</Button>
    </Link>
  </div>
  )
}
