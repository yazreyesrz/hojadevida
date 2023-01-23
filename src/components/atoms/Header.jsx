import Logo from '../../assets/img/Perfil.jpeg'
import '../../assets/styles/Header.css'
function Header() {
    return ( 
        <header>
            <img src={Logo} alt="Logo de la empresa" />
            <h1>Yazmín Reyes Ruíz</h1>
            <h2>__________________</h2>
            <h2>__________________</h2>
            
            <h3 >Estudiante en Ingenería en Desarrollo de Software</h3>
        </header>
     );
}

export default Header;