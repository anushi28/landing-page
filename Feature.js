import feature from "./feature.json"
import Body from "./Body"


export function Feature(){


    return(
        <>
        <div className="feature" id="feature">
            <h1 className="h1"> FEATURES</h1>

            <div className="container">
            
            {feature.map((ele)=>{
                return <Body Image = {ele.Image}  Title = {ele.Title} Text = {ele.Text} />
  
             })
    
            }
            
    
            </div>

            
        </div>

        </>
    )
}