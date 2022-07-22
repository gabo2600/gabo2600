import '../../css/card.css';

function Card(props){

    return <div className="card">
        <img src={props.img}></img>
        <h4>{props.nom}</h4>
        <p>{props.des}</p>
    </div>
}

export default Card;