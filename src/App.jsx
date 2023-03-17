import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LinkedinLogo from './assets/linkedin.svg'
import GithubLogo from './assets/github.svg'
import TwitterLogo from './assets/twitter.svg'
import './App.css'


function App() {
 

  return (
    <div className='App'>
      <header>
        <h4>Elizabeth</h4>
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
    <div className="social">
      <a href="https://www.linkedin.com/in/elizabeth-ogah">
        <img src={LinkedinLogo} alt="" />
      </a>

      <a href="https://github.com/pearlogah">
        <img src={GithubLogo} alt="" />
      </a>

      <a href="https://twitter.com/lizzy_105">
        <img src={TwitterLogo}alt="" />
      </a>

 </div>
 <p>&copy; Elizabeth Ogah</p>
</footer>
    </div>
  )
}

export default App
