import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href="https://www.instagram.com/yogesh._.04_/">
            <InstagramIcon/>
            </IconButton>
            <IconButton href="https://github.com/Yogeshpj">
            <GitHubIcon/>
            </IconButton>
            <span>
              <IconButton href="https://www.linkedin.com/in/yogesh-jayachandran-a821a8226/">
          <LinkedInIcon />
          </IconButton>
          </span>
        </div>
        <p> &copy; 2023 pjyportfolio.com</p>
    </div>
  )
}

export default Footer
//https://github.com/Yogeshpj
//https://www.linkedin.com/in/yogesh-jayachandran-a821a8226/
//https://www.instagram.com/yogesh._.04_/