import React from 'react';

export default function HeaderSection() {
  return (
    <div className="header-section">
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ marginRight: '20px', flex: '1' }}>
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=2000"
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="container" style={{ flex: '1' }}>
          <h1 className="text-dark">Make it Simple But Significant</h1>
          <p className="text-secondary" style={{ maxWidth: '400px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            facilis explicabo, soluta dolore non commodi? Eaque sunt veniam
            blanditiis quasi, accusamus numquam voluptates maxime necessitatibus
            reprehenderit vero ullam quo amet.
          </p>
          <button
            className="btn btn-dark"
            style={{ marginTop: '10px' }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
