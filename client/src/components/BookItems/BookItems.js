import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const bookList = props => {
  return (
    <ListGroup>
      {props.books.map(book => (
        <ListGroup.Item as="li">
          <Row className="book-list">
            <Col md={8}>
              <h3>{book.title}</h3>
              {book.subtitle !== undefined && book.subtitle.length > 0 && (
                <h5>{book.subtitle}</h5>
              )}
            </Col>
            <Col md={4}>
              <div>
                <Button
                  href={book.link}
                  rel="noopener noreferrer"
                  as="a"
                  target="_blank"
                >
                  View
                </Button>
                {props.action === "save" && (
                <Button 
                onClick={() => props.bookAction(book)}
                >
                    Save
                </Button>
                )}

                <Button>Delete</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p>Written by: {book.authors.join(", ")}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={2}>
              <img
                src={book.image}
                alt={book.title}
                className="img-thumbnail img-fluid w-100"
              />
            </Col>
            <Col xs={12} sm={8} md={10}>
              <p>{book.description}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default bookList;
