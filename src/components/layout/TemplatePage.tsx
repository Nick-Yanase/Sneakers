import Footer from "./Footer";
import Header from "./Header";

export interface MainPageProps{
  className?: string //tem que ter pois iremos usar classname no componente
  children: React.ReactNode //tem que ter pois iremos colocar elementos filhos dentro deste componente
}
export default function MainPage(props: MainPageProps){
  return(
  <div className="flex flex-col">
    <Header/>
    <main className={`mt-[76px] mb-24 md:mt-48 md:mb-44 w-full flex flex-col items-center justify-center ${props.className ?? ``}`}>
      {props.children}
    </main>
    <Footer/>
  </div>
  )
}