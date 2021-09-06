import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { connect } from 'react-redux';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.removeItem('Token');
        this.props.setLoginStatus(false);
    }

    render() {

        return (
            <>
                <Link id='GoToMain' style={{ display: 'none' }} to="/">a</Link>
                <Link id='GoToCategories' style={{ display: 'none' }} to="/category">a</Link>
                <Link id='GoToPosts' style={{ display: 'none' }} to="/site">a</Link>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link ><div onClick={() => { document.getElementById('GoToMain').click(); }}>Main</div></Nav.Link>
                            <Nav.Link ><div onClick={() => { document.getElementById('GoToCategories').click(); }}>Categories</div></Nav.Link>
                            <Nav.Link ><div onClick={() => { document.getElementById('GoToPosts').click(); }}>Posts</div></Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={jwt_decode(localStorage.getItem('Token')).unique_name} id="collasible-nav-dropdown">
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="" onClick={this.handleClick}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(Navigation);