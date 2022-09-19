import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Article1 from '../pages/article1.js'

function ArticlesCards({ima,title,text,link}) {
  return (
    <Card style={{ maxWidth: '25rem' }}>
      <Card.Img variant="top" src={ima}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <a href="./article1"><Button style={{"color":"white","backgroundColor":"#6f42c1","fontWeight":"600"}} >Read full article </Button></a>
      </Card.Body>
    </Card>
  );
}

export default ArticlesCards;