import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { setLoginStatus } from '../Actions/LoginAction';
import { getCategory } from '../Actions/CategoryAction';
import { getPost } from '../Actions/PostAction';
import { Link } from 'react-router-dom';
import api from '../api';

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            width: 0,
            height: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    handleClick() {
        api.post(`users/login`, { username: this.state.username, password: this.state.password })
            .then(res => {
                localStorage.setItem('Token', res.data);

                this.props.setLoginStatus(true);

                this.props.getCategory();
                this.props.getPost();

                alert('ورود شما با موفقیت انجام شد')
            })
            .catch(error => {
                alert('ورود شما با خطا مواجه شد')
            });
    }

    render() {

        return (
            <>
                <Link id='GoToRegister' style={{ display: 'none' }} to="/register">a</Link>

                <div className="Login">
                    <div className="aha">
                        <FormGroup controlId="username">
                            <div>نام کاربری</div>
                            <FormControl
                                autoFocus
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <div>رمز عبور</div>
                            <FormControl
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                type="password"
                            />
                        </FormGroup >
                        <Button onClick={this.handleClick} block>
                            ورود
                        </Button>
                        <Button onClick={() => { document.getElementById('GoToRegister').click(); }} block>
                            صفحه ثبت نام
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    LoginStatus: state.LoginStatus,
    Categories: state.Categories.items,
    Posts: state.Posts.items
});

export default connect(mapStateToProps, { setLoginStatus, getCategory, getPost })(Login);