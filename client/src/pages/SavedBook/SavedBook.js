import React, {Component} from 'react';
import API from '../../utils/API';

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
            <div></div>
        )
    }
}

export default Saved;