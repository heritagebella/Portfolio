import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import logo from './assets/blockchain logo.png'
import LinkedinLogo from './assets/linkedin.svg'
import GithubLogo from './assets/github.svg'
import TwitterLogo from './assets/twitter.svg'



function App() {
  return (
    <div className='App'>
      <header>
   <img src={logo} alt="" className='logo' /> 

        <div className='navLinks'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
          
        </div>
      </header>
       <main>
<Home />
<About />
<Projects />
<Contact />
</main>

<footer>
<div className='social'>
  <a href="https://www.linkedin.com/in/blessing-ayesa-718256203" target='_blank'>
  <img src={LinkedinLogo} alt=""/>
  </a>

  <a href="https://github.com/heritagebella" target='_blank'>
  <img src={GithubLogo} alt=""/>
  </a>
  <a href='https://twitter.com/blessing_ayesa'target='_blank'>
  <img src={TwitterLogo} alt=""/>
  </a>
</div>
<p>&copy; Blessing Ayesa</p>
</footer>
</div>

   
  )
} 

export default App
