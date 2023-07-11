import style from "../styles/Card.module.css"
const Card = (props)=>{
    return (
        <div className={style.container}>
            <div className={style.card}>
            <img src={props.image} alt={props.name}  className={style.pokemon}/>
           <p>name:{props.name}</p> 
           <p>Height:{props.height}</p>
            </div>
         
        </div>
    )
    };
    
    
    export default Card;