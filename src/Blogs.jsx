import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Blogs = () => {
  const boldStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const blogData = [
    {
      id: 1,
      title: 'Accordion Item #1',
      header: 'Card Header #1',
      content: "Here's some content for the first blog article...",
    },
    {
      id: 2,
      title: 'Accordion Item #2',
      header: 'Card Header #2',
      content: "Here's some content for the second blog article...",
    },
    {
      id: 3,
      title: 'Accordion Item #3',
      header: 'Card Header #3',
      content: "Here's some content for the third blog article...",
    },
    {
      id: 4,
      title: 'Accordion Item #4',
      header: 'Card Header #4',
      content: "Here's some content for the fourth blog article...",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      <Card className="mt-4">
        <Card.Header style={boldStyle}>Blogs</Card.Header>
        <Card.Body>
          <Card.Title style={boldStyle}>Blogs Articles</Card.Title>
          <Card.Text>Find the latest blogs articles here.</Card.Text>
        </Card.Body>
      </Card>

      <Accordion className="mt-4">
        {blogData.map((blog) => (
          <Accordion.Item key={blog.id} eventKey={blog.id.toString()}>
            <Accordion.Header onClick={() => handleAccordionChange(blog.id)}>
              {blog.title}
            </Accordion.Header>
            <Accordion.Body>
              <Card>
                <Card.Header>{blog.header}</Card.Header>
                <Card.Body>
                  <Card.Text>{blog.content}</Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Blogs;
