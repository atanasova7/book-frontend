import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Form, Input, Button, Row, Col } from "antd";

const Login = props => {

    const [loading, setLoading] = React.useState(false);

    function handleSubmit (values) {
        setLoading(true)        
            props.loginUser(values, props.history)
            .then((res) => {
                setLoading(false)
            })        
    }; 

    return (     
            <Row>
                <Col lg={{ span: 4 }}></Col>
                <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                        <Row>
                            <Col lg={{ span: 6 }}></Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Form onFinish={handleSubmit} layout="vertical">
                                    <h2>Sign in</h2>                                
                                    <Form.Item
                                        name="email"
                                        label='Email'
                                        rules={[{ required: true, message: 'Please enter username' }]}
                                    >
                                        <Input type="email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label='Password'
                                        rules={[{ required: true, message: 'Please enter password' }]}
                                    >
                                        <Input type="password" />
                                    </Form.Item>
                                      <Button
                                          loading={loading}
                                          htmlType="submit"
                                      >
                                         Sign in
                                      </Button>
                                </Form>
                            </Col>
                        </Row>
                </Col>
            </Row>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);