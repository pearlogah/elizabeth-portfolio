import nft from '../assets/nft.jpg'
import erc20 from '../assets/erc20.jpg'




function Projects() {
 
return (
      <div id="projects">
        <h2>Projects</h2>
        <p>Kindly, click and view some of my Projects below </p>
        <div className="box-container">
          <div className="box">
            <img src={nft} alt="" />
            <a href="https://github.com/pearlogah/Pearl-Nft.git">Github Link</a>
        </div>

        <div className="box">
            <img src={erc20} alt="" />
            <a href="https://github.com/pearlogah/ERC-20-Token-for-Chev-coin.git">Github Link</a>
         </div>
         <div className="box">
            <img src={erc20} alt="" />
            <a href="https://github.com/pearlogah/crowdfunding.git">Github Link</a>
         </div>
         
     </div>
  
  
      </div>
    )
  }
  
  export default Projects
  