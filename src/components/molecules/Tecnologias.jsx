import Foto2 from '../../assets/img/foto2.jfif'
import Foto3 from '../../assets/img/foto3.png'
import '../../assets/styles/Tecnologias.css'

function Tecnologias(){
    return ( 

        
      <div class="contenedor-flexbox">
        <div id='Caja2'>
        <h1 id='tec'>TECNOLOGIAS</h1>
        <div id='Caja3'>
            <img id='f2' src={Foto2} alt="-" />
                <h5 id='Lista'>C++</h5>
                <h5 id= 'Lista'>Java</h5>
                <h5 id= 'Lista'>JavaScript</h5>
                <h5 id= 'Lista'>Jira</h5>
                <h5 id= 'Lista'>MySQL</h5>
            </div>
        </div>
        <div id='Caja2'>
        <h1 id='tec'>EXPERIENCIAS DE TRABAJO</h1>
        <br /><br />
        <img id='f3' src={Foto3} alt="-" />
        <br /><br />
        <h2 id='Sub'>Proyecto Integrador</h2>
        <h3 id='just'>Dentro de un equipo de trabajo conformado por tres personas se proponen proyectos y se desarrolla el que tiene mejor propuesta de negocio.</h3>
        <br /><br />
        <h2 id='Sub'>PETMAPS</h2>
        <h3 id='just'>Aplicacion web que se basa en la adopcion de mascotas de manera segura, y proporciona un seguimiento a las personas que adoptan.</h3>
        <br /><br />
        <h2 id='Sub'>CURA DELLA SKIN</h2>
        <h3 id='just'>Estoy en iniciando en este proyecto asi que no hay mucho que decir, pero se basa en rutinas del cuidado de las diferentes tipos de pieles.</h3>
        <br /><br /><br /><br />
        </div>

      </div>
        
     );
}
export default Tecnologias;