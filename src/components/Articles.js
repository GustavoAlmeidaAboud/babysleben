import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Ratio from 'react-bootstrap/Ratio';

function Articles({title,text,vid}) {
  return (
    <>
      <Ratio aspectRatio={1 / 2}>
        <iframe src={vid} />
      </Ratio>
      <Card style={{ maxWidth: '25rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{textAlign:'justify'}}>{text}</Card.Text >
          <div className='spacer'></div>
      </Card.Body>
      </Card>
    </>
  );
}

export default Articles;
