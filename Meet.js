export default function Meet(props){
    return(
        <>
        <div className="meet">
           <img src={props.Image}></img>
          <h3> {props.Title}</h3>
           <span className="desig">{props.Designation} </span>

          
          
        </div>
        </>
    )
}