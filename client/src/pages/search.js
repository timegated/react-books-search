import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import BookList from '../components/BookItems/BookItems'
//Search component will contain ajax calls to the back-end
//Handles all the logic for searching the GBAPI

class Search extends Component {
    state = {
        books: []
    }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h1>Header Component</h1>
          </Col>
          <Col md={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-success text-white">
                <h3>Book Search</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>
                      <h5>Search</h5>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a book to search"
                    />
                    <Form.Control.Feedback type="invalid">
                      Provide a valid search phrase
                    </Form.Control.Feedback>
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="dark"
                        type="submit"
                        size="lg"
                        className="shadow"
                      >
                        Search
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Card className="mt-4 shadow">
                    <Card.Header className="border-bottom-0 bg-success text-white">
                        <h3>Results</h3>
                    </Card.Header>
                    <Card.Body>
                        {!this.state.books.length ? (
                            <h2>Search for a book to begin</h2>
                        ) : (
                            <BookList books=
                            {this.state.books}
                            handleBookAction={this.handleBookAction}
                            action={this.state.action}
                            />
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
