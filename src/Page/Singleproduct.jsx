import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Singleproduct() {
  const { singleproduct } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${singleproduct}`)
      .then((json) => setProducts(json.data.products));
  }, [singleproduct]);

  const cardStyle = {
    width: '300px',
    height: '400px',
  };

  const imageStyle = {
    objectFit: 'cover',
    height: '200px',
  };

  const titleStyle = {
    height: '60px',
    overflow: 'hidden',
  };

  return (
    <div className="container">
      <div className="div-my-5 text-center">
        <h1 className="mt-3">{singleproduct.toUpperCase()}</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum libero incidunt earum illo veritatis
          perspiciatis dignissimos alias, adipisci ullam, nobis rem in provident minima pariatur voluptate asperiores eos
          ut.
        </p>
      </div>
      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-4 my-4" key={key}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card style={cardStyle}>
                <Card.Img variant="top" src={val.thumbnail} style={imageStyle} />
                <Card.Body>
                  <Card.Title style={titleStyle}>
                    {val.title}-{val.price}$
                  </Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Singleproduct;
