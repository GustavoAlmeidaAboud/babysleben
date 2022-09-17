import React from "react";
import { FaBeer } from 'react-icons/fa';


const Footer = ({tiktok,instagram,youtube}) => {
  return(
    <div className="icons">
      <a href="https://google.com">{tiktok}</a> 
      <a href="https://google.com">{instagram}</a>
      <a href="https://google.com">{youtube}</a>
    </div>
  )
}

export default Footer