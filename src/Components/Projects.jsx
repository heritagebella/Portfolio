import nft from '../assets/NFT.jpg'
import isa from '../assets/ERC20.png'
import are from '../assets/Crowdfunding.jpg'

function Projects() {

    return (
      <div id='projects'>
  <h2>Projects</h2>
  <p>All my project includes links to the source code on Github. Click the button attached to each to know about each project. </p>

  <div className="card-container">
  <div className='card'>
<img src={nft} alt=""  />
<a href='https://github.com/heritagebella/blessing.git'target='_blank'>Github Link</a>
</div>

<div className="card">
<img src={isa} alt=""  />
<a href='https://github.com/heritagebella/OCTminiproject.git'target='_blank'>Github Link</a>
</div>

<div className='card'>
<img src={are} alt=""  />
<a href='https://github.com/heritagebella/aisha.git'target='_blank'> Github Link</a>
</div>


      </div>

    </div>
  
     
    )
  }  
  
  export default Projects
  