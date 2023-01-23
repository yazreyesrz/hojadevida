import Header from "../components/atoms/Header";
import Footer from "../components/atoms/Footer";
import SobreMi from "../components/molecules/SobreMi";
import Tecnologias from "../components/molecules/Tecnologias";


function Home(){
    return (
        <>
            <Header/>
            <SobreMi></SobreMi>
            <Tecnologias></Tecnologias>
            <Footer></Footer>

        </>
    )
}

export default Home;