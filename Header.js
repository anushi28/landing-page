import { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";

export function Header(){
    const [menu,setMenu] = useState("home")
    return(
        <>
        <div className="head">
            <h2 className="react" >REACT LANDING PAGE </h2>
<ul className="title">
    {/* <li onClick={()=>setMenu ("home")} className={`${menu === "REACT LANDING PAGE"? "active" : ""}`}>REACT LANDING PAGE</li> */}
    <a href="#feature" onClick={()=>setMenu("feature")} className={`${menu === "feature"? "active": ""}`}>FEATURES</a> 

    <a href="#about" onClick={()=>setMenu("about")} className={`${menu === "feature"? "active": ""}`}>ABOUT</a>
    <a href="#service" onClick={()=>setMenu("service")} className={`${menu === "feature"? "active": ""}`}>SERVICES</a>

    <a href="#gallery" onClick={()=>setMenu("gallery")} className={`${menu === "feature"? "active": ""}`}>GALLERY</a>
    <a href="#test" onClick={()=>setMenu("test")} className={`${menu === "feature"? "active": ""}`}>TESTIMONIALS</a>
    <a href="#team" onClick={()=>setMenu("team")} className={`${menu === "feature"? "active": ""}`}>TEAM</a>
    <a href="#contact" onClick={()=>setMenu("contact")} className={`${menu === "feature"? "active": ""}`}>CONTACT</a>
</ul>
           
            
            
      
            
            <a href="" className="fb"><FaFacebookSquare/></a>
            <a href=""><FaInstagramSquare/></a>


        

        </div>

        
        </>
    )
}