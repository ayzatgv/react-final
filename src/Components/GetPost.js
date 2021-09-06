import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/PostAction';
import { Link } from 'react-router-dom';

class GetPost extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.deletePost(id);
    }

    render() {
        let Tableee = this.props.Posts.map((item) => {
            return (
                <tr key={item.id} >
                    <td><Button onClick={() => this.handleClick(item.id)} variant="primary" >Delete</Button></td>
                    <td><Link to={`/post/detail/${item.id}`}><Button variant="primary" >Edit</Button></Link></td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.categoryId}</td>
                    <td>{item.authorId}</td>
                </tr>
            );
        })
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Link to={`/post/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
                </Row>
                <Row>
                    <Col >
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>description</th>
                                    <th>categoryId</th>
                                    <th>authorId</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tableee}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Posts: state.Posts.items
    }
}

export default connect(mapStateToProps, { deletePost })(GetPost);