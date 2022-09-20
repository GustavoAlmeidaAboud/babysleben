import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Article1 from '../pages/article1.js'
import { Outlet, Link } from "react-router-dom";

function ArticlesCards({ima,title,text,pagelink}) {
  return (
    <Card style={{ maxWidth: '30rem'}}>
      <Card.Img variant="top" src={ima}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Link to={pagelink}><Button style={{"color":"white","backgroundColor":"#6f42c1","fontWeight":"600"}} >Read full article </Button></Link>
      </Card.Body>
    </Card>
  );
}

export default ArticlesCards;