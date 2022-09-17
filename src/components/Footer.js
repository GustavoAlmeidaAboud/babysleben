import React from "react";
import { FaBeer } from 'react-icons/fa';


const Footer = ({tiktok,instagram,youtube}) => {
  return(
    <>
      <a href="https://google.com">{tiktok}</a> <a href="https://google.com">{instagram}</a>
      <a href="https://google.com">{youtube}</a>
    </>
  )
}

export default Footer