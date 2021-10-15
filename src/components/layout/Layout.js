import React from 'react';
import { connect } from 'react-redux';
import { Layout as LayoutContent, Menu } from 'antd';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";

const { Header, Content, Footer } = LayoutContent;

const Layout = props => {
    let location = useLocation();
    function logout () {
      props.logoutUser()
    }
    return (
        <LayoutContent className="layout">
        <Header>          
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
           {props.auth.isAuthenticated &&
           <>
           <Menu.Item key={1}><Link to="/books">{'Books'}</Link></Menu.Item>
           <Menu.Item key={2}><Link to="/add/book">{'Add Book'}</Link></Menu.Item>
           <Menu.Item key={3} onClick={logout}>{'Logout'}</Menu.Item>
           </>
           }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>          
          <div className="site-layout-content">{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Books project</Footer>
      </LayoutContent>
);
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser} )(Layout);