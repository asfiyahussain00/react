
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ImageSection from '../Component/ImageSection';

function ProductPage() {
  const { ProductID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity,
    };
    console.log(payload);

    Swal.fire('Added to Cart', 'Product added to cart successfully!', 'success');
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${ProductID}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [ProductID]);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Validate review input
    if (!review) {
      Swal.fire('Error', 'Please enter a review.', 'error');
      return;
    }

    // Submit review
    const payload = {
      ProductID: ProductID,
      review: review,
    };
    console.log(payload);

    Swal.fire('Success', 'Review submitted successfully!', 'success');
  };

  const headingStyle = {
    marginTop: '20px',
  };

  const descriptionStyle = {
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    marginLeft: '50px',

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 style={headingStyle}>{product.title}</h1>
          <p className="text-secondary" style={descriptionStyle}>
            {product.description}
          </p>
          <div style={buttonContainerStyle}>
            <button
              className="btn btn-dark  mx-3 text-center"
              disabled={productQuantity > 1 ? false : true}
              onClick={() => setProductQuantity(productQuantity -1 )}
            >
              -
            </button>
            {productQuantity}
            <button
              className="btn btn-dark"
              onClick={() => setProductQuantity(productQuantity +1 )}
            >
              +
            </button>
          </div>
          <button className="btn btn-dark mt-3" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {product?.images?.length > 0 && <ImageSection images={product.images} />}
          {product?.images?.map((val, key) => (
            <div key={key}>{val}</div>
          ))}
        </div>

        <div className="col-md-6">
          <div className="mt-5">
            <h2>Customer Reviews</h2>
            <form onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label htmlFor="reviewInput">Write your review:</label>
                <textarea
                  id="reviewInput"
                  className="form-control"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-dark mt-2">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
