import React, {useState} from 'react';
import './LinkBar.css';


function Linkbar (props) {
  const [socialName, setSocialName] = useState(' ');

function visitExternalPage(url) {
  window.location = url;
}

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
        <p id='selectedLink' data-cy='socialMediaAccount'>{socialName}</p>
      </div>
      <div className='linkbar-container'>
        <div className='mediaLink'>
          <div className='icon' id='linkedin' data-cy='linkedinLink' onMouseEnter={()=> showText('linkedin')} onMouseLeave={() => hideText()} alt='follow me on linkedin' onClick={()=>visitExternalPage('https://www.linkedin.com/in/crudnicky')} > </div>
          <p className='mobileLabel'>Linkedin</p>
        </div>
        <div className='mediaLink'>
          <div className='icon' id='instagram' data-cy='instagramLink' onMouseEnter={()=>showText('instagram')} onMouseLeave={()=>hideText()} alt='follow me on instagram' onClick={()=>visitExternalPage("https://www.instagram.com/virginiathekid")} ></div>
          <p className='mobileLabel'>Instagram</p>
        </div>
        <div className='mediaLink'>
          <div className='icon' id='github' data-cy="githubLink" onMouseEnter={()=>showText('github')} onMouseLeave={()=>hideText()}alt='link to github' onClick={()=>visitExternalPage('https://www.github.com/68thandMaine')}> </div>
          <p className='mobileLabel'>Github</p>
        </div>
      </div>
    </div>
  )
}

export default Linkbar;