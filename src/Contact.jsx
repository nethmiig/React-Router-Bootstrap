import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact" className="container mt-4 p-4" style={{ backgroundColor: '#F9EAF9', borderRadius: '0.5rem' }}>
      <Card className="border-0">
        <Card.Body>
          <Card.Title className="border-bottom pb-2 text-center h2 text-dark">Contact me</Card.Title>
          <Card.Text className="text-center text-muted mb-4">
            For questions or feedback, please choose a category below.
          </Card.Text>
          <Card className="bg-pink-1 border-0 mb-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-white">General Inquiry</Card.Title>
              <Button
                variant="light"
                className="w-100"
                style={{ backgroundColor: '#FF7EB9', padding: '0.8rem', borderRadius: '0.25rem' }}
                href="mailto:generalinquiry@example.com"
              >
                generalinquiry@example.com
              </Button>
            </Card.Body>
          </Card>
          <Card className="bg-pink-2 border-0 mb-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-white">Feedback</Card.Title>
              <Button
                variant="info"
                className="w-100"
                style={{ backgroundColor: '#FF477E', padding: '0.8rem', borderRadius: '0.25rem' }}
                href="mailto:feedback@example.com"
              >
                feedback@example.com
              </Button>
            </Card.Body>
          </Card>
          <Card className="bg-purple border-0">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-white">Support</Card.Title>
              <Button
                variant="success"
                className="w-100"
                style={{ backgroundColor: '#6A0572', padding: '0.8rem', borderRadius: '0.25rem' }}
                href="mailto:support@example.com"
              >
                support@example.com
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
