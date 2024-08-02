export interface ButtonProps{
  children: React.ReactNode //esse botão tem um conteudo
  className?: string
  onClick?: () => void
}
export default function Button(props: ButtonProps){
  return(
  <button onClick={props.onClick} className="bg-orange-500 w-full py-3 font-semibold text-black gap-4 rounded-lg flex items-center justify-center transition-all hover:bg-orange-400">
    {props.children}
  </button>
  )
}