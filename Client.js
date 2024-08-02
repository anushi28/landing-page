import { Person } from "./Person"
import { Texting } from "./Texting"
export function Client(){
   let man ={
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaviIGVfkeUITCBPq52yc7BnkCNIIKtYNr2Lx7_zKCyg&s"
   }
   let text ={
    Text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    Name : "-John Doe "
   }
   

    return(
        <>
        <div className="box5" id="test">
            <h1 className="client">
                WHAT OUR CLIENTS SAY
            </h1>
<div className="finalbox">
<div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>

    <div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>

    <div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>
   
    
</div>

<div className="finalbox">
<div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>

    <div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>

    <div className="outerbox">
            
            <Person  Image = {man.Image}/>
            <Texting Text = {text.Text} Name = {text.Name}/>

           
            
    </div>

       

</div>



            </div>    

   
              

            

          





        </>
    )
}