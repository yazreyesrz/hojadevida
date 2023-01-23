
import Foto from '../../assets/img/foto1.jfif'
import '../../assets/styles/SobreMi.css'

function SobreMi() {
    return (
        <>
        <center>
        <h1 id="ab">SOBRE MI</h1>
        </center>
           
            <br /><br />
            <div id="Caja1">
            <h3>Estoy cursando la carrera de ingenieria en desarrollo de </h3>
            <h3>software por lo tanto todavia estoy en proceso de aprendizaje</h3>
            <h3> y desarrollando mis habilidades de programacion. </h3>
            <img id="f1" src={Foto} alt="-" />
            </div>
           
      
        </>
      );
}
export default SobreMi;