import glo from "../assets/ava2.png"

function About() {
    return (
    <div id= 'about'>

  <h2>About</h2>
        <div id= 'about'> 
        <div className="about-container">
            <div className="bio">
<h3>Who am I?</h3>
<p>I'm passionate about leveraging blockchain technology to creat secure decentralized applications.</p>
<p>I am excited about the potential of blockchain technology to transform industries and create a more secure and transparent world. I believe that Solidity, as a programming language, has tremendous potential for creating new business models and enabling more efficient  and decentralized system.</p>
</div>
<div className= "profile-image">
<img src={glo} alt=""  />

            </div> 
        </div>

</div>
      </div>
     
    )
  } 
  
  export default About
  