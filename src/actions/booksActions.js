import client from './client';
import { GET_BOOKS } from './types';

export const getBooks = () => dispatch => {
    return  client
              .get('/api/books')
              .then(response => {
                  console.log(response.data.books)
                dispatch({
                    type: GET_BOOKS,
                    payload: response.data.books
                  })
              })
              .catch(error => {

              })
}              