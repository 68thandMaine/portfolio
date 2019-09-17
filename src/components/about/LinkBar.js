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
          <a className='icon' id='linkedin' onMouseEnter={()=> showText('linkedin')} onMouseLeave={() => hideText()} alt='follow me on linkedin' href='https://www.linkedin.com/in/crudnicky' > </a>
        </div>
        <div className='mediaLink'>
          <a className='icon' id='instagram' onMouseEnter={()=>showText('instagram')} onMouseLeave={()=>hideText()}alt='follow me on instagram' href='https://www.instagram.com/virginiathekid' > </a>
        </div>
        <div className='mediaLink'>
          <a className='icon' id='github'  onMouseEnter={()=>showText('github')} onMouseLeave={()=>hideText()}alt='link to github' href='https://www.github.com/68thandMaine'> </a>
        </div>
      </div>
    </div>
  )
}

export default Linkbar;