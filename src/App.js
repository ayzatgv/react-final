import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoginStatus } from './Actions/LoginAction';
import { getCategory } from './Actions/CategoryAction';
import { getPost } from './Actions/PostAction';

import Login from './Components/Login';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import NotFound from './Components/NotFound';
import Main from './Components/Main';

import GetCategory from './Components/GetCategory';
import GetPost from './Components/GetPost';

import AddCategory from './Components/AddCategory';
import AddPost from './Components/AddPost';

import DetailCategory from './Components/DetailCategory';
import DetailPost from './Components/DetailPost';


class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('Token') != null) {
      this.props.setLoginStatus(true);

      this.props.getCategory();
      this.props.getPost();
    }
    else {
      this.props.setLoginStatus(false);
    }
  }

  render() {
    return (
      (this.props.LoginStatus === true) ?
        (
          <div>
            <Router >
              <Navigation />
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/category" exact component={GetCategory} />
                <Route path="/category/add" exact component={AddCategory} />
                <Route path="/category/detail/:id" exact component={DetailCategory} />
                <Route path="/post" exact component={GetPost} />
                <Route path="/post/add" exact component={AddPost} />
                <Route path="/post/detail/:id" exact component={DetailPost} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </div>
        ) :
        <div>
          <Router >
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/" component={Login} />
            </Switch>
          </Router>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  LoginStatus: state.LoginStatus,
  Categories: state.Categories.items,
  Posts: state.Posts.items
});

export default connect(mapStateToProps, { setLoginStatus, getCategory, getPost })(App);
