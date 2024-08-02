export default function Six(props){
    return(
        <div className="sixbox">
            <div className="imgbox"> 
            <img src={props.Image} className="icons"></img>

            </div>
        
       <h3> {props.Title}</h3>
        <span>{props.Text} </span>
       
     </div>

    )

}
