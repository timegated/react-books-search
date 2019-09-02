import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Description from "../Description/Description";

const bookImg = {
  width: "150px",
  height: "150px",
  margin: "0 auto"
};

const card = {
  width: "auto",
  height: "auto"
};

const bookList = props => {
  return (
    <Row>
      {props.books.map(book => (
        <ListGroup.Item as="li">
          <Card style={card}>
            <Card.Img src={book.image} style={bookImg} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>

              <Card.Link
                className="btn bg-dark text-white"
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Card.Link>
              {props.action === "save" && (
                <Button className="ml-2" onClick={() => props.bookAction(book)}>
                  Save
                </Button>
              )}
              {props.action === "delete" && (
                <Button
                  className="ml-2"
                  onClick={() => props.deleteBook(book._id)}
                >
                  Delete
                </Button>
              )}
              <Description className="ml-2" description={book.description} />
            </Card.Body>
          </Card> 
         
        </ListGroup.Item>
      ))}

     
    </Row>
  );
};

export default bookList;
