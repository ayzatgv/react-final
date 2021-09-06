import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPost } from '../Actions/PostAction';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:'',
            categoryId:0,
            authorId:0,
            id:''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const post = {
            title: this.state.title,
            description: this.state.description,
            categoryId: this.state.categoryId,
            authorId: this.state.authorId,
            id: this.state.id
        };

        this.props.addPost(post);
    }

    render() {
        let Categories = this.props.Categories.map(
            (item) => {
                return (
                    <option key={item.id} value={item.id}>{item.name}</option>
                );
            }
        );
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={3}></Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="title">
                                        <Form.Label>title</Form.Label>
                                        <Form.Control value={this.state.title}
                                            onChange={(e) => { this.setState({ title: e.target.value }) }}
                                            placeholder="title" />
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>description</Form.Label>
                                        <Form.Control value={this.state.description}
                                            onChange={(e) => { this.setState({ description: e.target.value }) }}
                                            placeholder="description" />
                                    </Form.Group>
                                    <Form.Group controlId="categoryId">
                                        <Form.Label>categoryId</Form.Label>
                                        <Form.Control onChange={(e) => { this.setState({ categoryId: e.target.value }) }} as="select">
                                            <option value={0}>یک گزینه را انتخاب کنید</option>
                                            {Categories}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="authorId">
                                        <Form.Label>authorId</Form.Label>
                                        <Form.Control value={this.state.authorId}
                                            onChange={(e) => { this.setState({ authorId: e.target.value }) }}
                                            placeholder="authorId" />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>id</Form.Label>
                                        <Form.Control value={this.state.id}
                                            onChange={(e) => { this.setState({ id: e.target.value }) }}
                                            placeholder="id" />
                                    </Form.Group>

                                    <Button onClick={this.handleClick} variant="primary" >
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    Categories: state.Categories.items
});

export default connect(mapStateToProps, { addPost })(AddPost);