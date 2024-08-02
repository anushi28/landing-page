import Six from "./Six";
import service from "./service.json"
import serv from "./serv.json"
export function Service(){
    return(
        <>
        <div className="box3" id="service">
        <h1>OUR SERVICES</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</span>

        <div className="smallbox">
            
            {service.map((ele)=>{
                return <Six Image = {ele.Image}  Title = {ele.Title} Text = {ele.Text} />
  
             })
    
            }
            
    
            </div>

            <br></br>
            <div className="smallbox">
            
            {serv.map((ele)=>{
                return <Six Image = {ele.Image}  Title = {ele.Title} Text = {ele.Text} />
  
             })
    
            }
            
    
            </div>

        



        

        </div>
        
        </>
    )
}