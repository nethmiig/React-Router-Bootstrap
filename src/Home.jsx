import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import './App.css';

function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    setShowSuccess(true);
  };

  return (
    <div id="home" className="container mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="h4 mb-4">Welcome</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">Home Page</Card.Subtitle>
          <Card.Text className="mb-4">
            This is the homepage of our website. Explore other sections using the navigation above.
          </Card.Text>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Form>
          {showSuccess && (
            <Alert variant="success" className="mt-3">
              Successfully subscribed with email {email}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;