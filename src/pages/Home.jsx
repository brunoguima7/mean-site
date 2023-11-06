import "../styles/global.css"
import MainContent from "../components/MainContent.jsx"
import Apresentation from "../components/Apresentation.jsx"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
        <Header/>
        <Apresentation/>
        <MainContent/>
        <Footer/>
    </>
  )
}