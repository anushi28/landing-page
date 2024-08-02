
import Meet from "./Meet"
import meet from "./meet.json"
export function Team(){
    return(
        <>
        <div className="box6" id="team">
        <h1 className="client"> MEET THE TEAM</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</span>


        <div className="container">
            
            {meet.map((ele)=>{
                return <Meet Image = {ele.Image}  Title = {ele.Title} Designation ={ele.Designation}  />
  
             })
    
            }
            
    
            </div>


        </div>
        
        </>
    )
}