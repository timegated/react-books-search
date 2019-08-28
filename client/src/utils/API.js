import axios from 'axios'


const ajax = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})
//Basic crud operations go here
export default {
    searchBooks: query => {
        return ajax.get('/api/google', {params: {q: query}})
    }
}