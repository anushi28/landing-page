export default function Body(props){
    return(
        <div className="body">
           <img src={props.Image} className="icon"></img>
          <h3> {props.Title}</h3>
           <span>{props.Text} </span>
          
        </div>
    )
}

