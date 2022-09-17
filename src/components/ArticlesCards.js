import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticlesCards({ima,title,text,link}) {
  return (
    <Card style={{ maxWidth: '25rem' }}>
      <Card.Img variant="top" src={ima}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticlesCards;