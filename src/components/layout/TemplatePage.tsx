import Footer from "./Footer";
import Header from "./Header";

export interface MainPageProps{
  className?: string //tem que ter pois iremos usar classname no componente
  children: React.ReactNode //tem que ter pois iremos colocar elementos filhos dentro deste componente
}
export default function MainPage(props: MainPageProps){
  return(
  <div className="flex flex-col space-y-36">
    <Header/>
    <main className={`my-20 w-full px-2 ${props.className ?? ``}`}>
      {props.children}
    </main>
    <Footer/>
  </div>
  )
}