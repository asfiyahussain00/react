import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
  }, []);

  return (
    <>
      <div className="container ">
        <div className="my-5 text-center">
          <h1> Products Categories</h1>

          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime nihil minima provident. Magni repellat
            iusto dolores. Culpa, rerum beatae ratione voluptatum eius cum quae soluta optio maxime ab minus.
          </p>
        </div>
        <div className="row text-center">
          {categories.map((val, key) => (
            <div className="col-md-4 my-3" key={key}>
              <Link className="text-decoration-none" to={`/products/category/${val}`}>
                <Card className="text-white" bg="black">
                  <Card.Body>
                    <Card.Title>{key + 1}-{val.toUpperCase().replace('-', ' ')}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
