import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//item is given as props to receive objects
function ProductCard({item}) {

    const addToCart= (productName) =>{
        alert(`${productname} added to cart`);
    }
  return (
    <Card >
      {/* when the props is not presently not passed use item?; this is to display if the value exist */}
      <Card.Img variant="top" src={item?.image} className='productimage' />
      <Card.Body>
        <Card.Title>{item?.title.slice(0,20)}</Card.Title>
        <Card.Text>
          {item?.description.slice(0,90)}
        </Card.Text>
        <Button variant="primary" onClick={()=> addToCart(item?.title.slice(0,20))}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard