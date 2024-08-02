import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Lastpg = () => {
  return (
    <>
    <div className='lastbox' id='contact'>
    <div className='behind'>
        <div className='half'>
        <h1 className='last'>GET IN TOUCH</h1>
    <span>Please fill out the form below to send us an email and we will get back to you as soon as possible.</span>
    <form>
            <input type="text" required className="text" placeholder='name'></input> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='email' required className='text' placeholder='enter email'></input>
<br></br>
<br></br>
<input type='text' className='msg' required  placeholder='enter message'></input>
<br></br>
<br></br>
<br></br>
<button className='formbtn'>Send Message</button>

           </form>
          



        </div>
        

        <div className='secondhalf'>
          <h4>Contact Info</h4>
          <br></br>
          
       <img src='https://cdn-icons-png.flaticon.com/512/535/535239.png' className='font'></img> &nbsp;&nbsp;
       <span className='word'>Address</span>
       <p>4321 California St, San Francisco, CA  <br></br>12345</p>

       <img src="https://cdn-icons-png.freepik.com/256/13521/13521067.png?semt=ais_hybrid" className='font'></img> &nbsp;&nbsp;
       <span className='word'> Phone</span>
       <p>+1 123 456 1234</p>

       <img src='https://img.favpng.com/4/14/10/icon-email-clip-art-png-favpng-vdY2tSy4Mbzzdtn5a2J1f9q0H_t.jpg' className='font'></img> &nbsp;&nbsp;

       <span className='word'>Email</span>
       <p>info@company.com</p>
     
        </div>
        
   
    </div>
    <br></br>
    <hr></hr>

    <div className="end">
            <a href=""><FaFacebook/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaYoutube/></a><br></br>
            <a href="www.linkedin.com/in/anushi-jain-3aa473275"/>



        </div>

    </div>
  
    </>
    
  )
}
