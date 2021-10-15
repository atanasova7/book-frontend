import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getBooks } from "../../actions/booksActions";
import { Row, Col, Card } from "antd";
import 'antd/dist/antd.css';

const AccountsBooks = props => {

    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        props.getBooks()
    }, [])
    return (     
        <Row>   {console.log(typeof props.books.all)}         
                <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>Books</Col>
                {props.books &&
                 <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                      <Row>
                     {props.books.all.map(book => (
                          <Col xs={{ span: 12 }} lg={{ span: 5 }} style={{margin: 30}}>
                       <Card 
                       title={<div><b>Title: </b>book.title</div>} 
                       style={{background: '#F8F8F8	'}}>
                       <b>Author: </b>{book.author}
                       </Card>
                       </Col>
                     ))}    
                      </Row>            
                </Col>
                }
        </Row>
    );
}

const mapStateToProps = state => ({
    auth: state.auth,
    books: state.books
});

export default connect(mapStateToProps, { getBooks })(AccountsBooks);