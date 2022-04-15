import Link from "next/link"
import Nav from "../components/Nav"
import { FaArrowRight } from 'react-icons/fa';
function Home(){
    return (
        <div className="home">
            <h1>Home Page</h1>
            <div className="home-banner">
                <div className="home-rec">
                    <h2>Shop with us</h2>
                </div>
                <div className="home-rec">
                    <h2>Shop with us</h2>
                </div>
                <div className="home-rec">
                    <h2>Shop with us</h2>
                </div>
            </div>
            <Link href="./products" className="home-button" passHref>
                <button className="button-red">Go to shop <FaArrowRight className="icon-red"/> </button>
            </Link>
        </div>
    )
}
export default Home

Home.getLayout = function PageLayout(page){
    return(
        <>
        <Nav/>
        {page}
        </>
    )
}