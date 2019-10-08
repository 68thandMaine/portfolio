import React, {useState} from 'react';
import './LinkBar.css';


function Linkbar (props) {
  const [socialName, setSocialName] = useState(' ');

function showText(socialMediaName) {
  let textBox = document.getElementById('selectedLink');
  textBox.classList.remove('fadeTextOut');
  textBox.classList.add('fadeTextIn');
  setSocialName(socialMediaName);
} 
function hideText() {
  let textBox = document.getElementById('selectedLink');
  textBox.classList.remove('fadeTextIn');
  textBox.classList.add('fadeTextOut');
}
  return (
    <div className='linkbar'>
      <div className='selectedLinkWrapper'>
        <p id='selectedLink'>{socialName}</p>
      </div>
      <div className='linkbar-container'>
        <div className='mediaLink'>
          <div className='icon' id='linkedin' data-cy='linkedinLink' onMouseEnter={()=> showText('linkedin')} onMouseLeave={() => hideText()} alt='follow me on linkedin' href='https://www.linkedin.com/in/crudnicky' > </div>
          <p className='mobileLabel'>Linkedin</p>
        </div>
        <div className='mediaLink'>
          <div className='icon' id='instagram' data-cy='instagramLink' onMouseEnter={()=>showText('instagram')} onMouseLeave={()=>hideText()}alt='follow me on instagram' href="https://www.instagram.com/virginiathekid" ></div>
          <p className='mobileLabel'>Instagram</p>
        </div>
        <div className='mediaLink'>
          <div className='icon' id='github' data-cy="githubLink" onMouseEnter={()=>showText('github')} onMouseLeave={()=>hideText()}alt='link to github' href='https://www.github.com/68thandMaine'> </div>
          <p className='mobileLabel'>Github</p>
        </div>
      </div>
    </div>
  )
}

export default Linkbar;