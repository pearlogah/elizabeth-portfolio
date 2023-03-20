import avatar from '../assets/Pearl.jpg'

function About() {
  return (
      <div id="about">
     <h2>About</h2>
     <div className="about-container">
        
        <div className="bio">
     <h3>Who am I?</h3>
     <p>I am a Women Techster Fellow of TECH4DEV  . I am from a non-technical
        background and transitioned into tech 2 Years Ago</p>
        <p>I participated and led a team to create a Social Impact Project to promote the adoption 
         of Blockchain Technology among Women and Girls .</p>
         <p> I am always thrilled and excited to speak the Gospel of Blockchain Technology, with it Possiblities
            of changing the World. </p>
        </div>
        <div className="profile-image">
     <img src={avatar} alt="" />
        </div>
     </div>
  
      </div>
    )
  }
  
  export default About
  