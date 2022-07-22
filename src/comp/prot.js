
import Card from './aux/cards';
import '../css/prot.css'


function Prot(){
    return <div className="container paper">
          <h2 className="col">Proyectos</h2>
        <div className='cardContainer'>
        <Card img='/img/aaa.png' alt='img' nom='Nombre del proyecto' des='descripcion del proyecto' ></Card>
        <Card img='/img/aaa.png' alt='img' nom='Nombre del proyecto' des='descripcion del proyecto' ></Card>
        <Card img='/img/aaa.png' alt='img' nom='Nombre del proyecto' des='descripcion del proyecto' ></Card>
        <Card img='/img/aaa.png' alt='img' nom='Nombre del proyecto' des='descripcion del proyecto' ></Card>

        </div>
    </div>
}

export default Prot;