import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Row, Col, Alert, Modal, message } from "antd";
import { withRouter } from 'react-router-dom'
import client from '../../actions/client';
import { DatePicker } from 'antd';

const AddBook = props => {
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);

    const onReset = () => {
        console.log(form.getFieldsValue())
        form.resetFields();
    };

    const handleSubmit = (values) => {
        setLoading(true)    
        values.release_date = values.release_date.format('YYYY-MM-DD hh:mm:ss');
        client
        .post('/api/add/book', values)
        .then((response) => {
            message.success('Success!')
            setLoading(false)
            form.resetFields()
        })
        .catch(error => {
            let mess = 'Error! ';
            console.log(error.response.data.errors)
            if(error.response && error.response.data && error.response.data.errors){
                for (const [key, value] of Object.entries(error.response.data.errors)) {                    
                    mess +=  value;
                  }          
            }else if(error.response && error.response.data && error.response.data.message){
                mess += error.response.data.message
            }
            message.error(mess)
            setLoading(false)  
        })
    }; 

    return (     
        <Row>
                <Col xs={{ span: 16, offset: 4 }} lg={{ span: 8, offset: 8 }}>Book
                <Form onFinish={handleSubmit} layout="vertical" form={form}>
                                    <h2>Add book</h2>                                
                                    <Form.Item
                                        name="title"
                                        label='Title'
                                        rules={[{ required: true, message: 'Please enter title' }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        name="author"
                                        label='Author'
                                        rules={[{ required: true, message: 'Please enter author' }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        name="release_date"
                                        label='Release date'
                                        rules={[{ required: true, message: 'Please enter release date' }]}
                                    >
                                    <DatePicker format={'YYYY-MM-DD'} style={{width: '100%'}}/>
                                    </Form.Item>
                                    <Button
                                        type="primary"
                                        loading={loading}
                                        htmlType="submit"
                                        style={{margin: 20}}>
                                         Save
                                    </Button>
                                    <Button 
                                      htmlType="button" 
                                      onClick={onReset}
                                      style={{marginTop: 20}}>
                                        Reset
                                    </Button>
                                </Form>
                                </Col>
        </Row>
    );
}


export default withRouter(AddBook);