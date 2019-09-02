import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import BookItems from '../components/BookItems/BookItems'
import API from '../utils/API';

class Saved extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                pageTag: 'Saved Books',
                action: 'delete',
                books: []
            }
        
    }
    componentDidMount() {
        this.loadBooks()
    }
    
    loadBooks = () => {
        API.getSaved()
          .then(res => {
             const bookItems = res.data;

             this.setState({ books: bookItems })
         })
    }
    deleteBookHandler = (id) => {
        console.log(id)
        API.deleteBooks(id)
          .then(() => this.loadBooks())
          .catch(err => console.log(err))
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col md={12}>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card className="mt-4 shadow">
                        <Card.Header className="border-bottom-0 bg-success text-white">
                            <h3>Saved Books</h3>
                        </Card.Header>
                        <Card.Body>
                            {!this.state.books.length ? (
                                <h2 className="text-center">Nothing Saved Here</h2>
                            ) : (
                                <BookItems
                                books={this.state.books}
                                deleteBook={this.deleteBookHandler}
                                action={this.state.action}
                                />
                            )}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Saved;