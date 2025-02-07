import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/kittichanawat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.facebook.com/rach.ch.chk.vty.kitti.chokh.thn.wachr" target="_blank" rel="noreferrer"><FacebookIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/kittichanawat" target="_blank" rel="noreferrer">Ratchakit Kittichokthanawat</a> with ReactJS</p>
    </footer>
  );
}

export default Footer;