import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCategory } from '../Actions/CategoryAction';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            parentCategoryId:0,
            parentCategoryName:'',
            id:0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const category = {
            name: this.state.name,
            parentCategoryId: this.state.parentCategoryId,
            parentCategoryName:this.state.parentCategoryName,
            id:this.state.id
        };

        this.props.addCategory(category);
    }

    render() {
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Col md={12} xl={3}></Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>name</Form.Label>
                                        <Form.Control value={this.state.name}
                                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                                            placeholder="name" />
                                    </Form.Group>
                                    <Form.Group controlId="parentCategoryId">
                                        <Form.Label>parentCategoryId</Form.Label>
                                        <Form.Control value={this.state.parentCategoryId}
                                            onChange={(e) => { this.setState({ parentCategoryId: e.target.value }) }}
                                            placeholder="parentCategoryId" />
                                    </Form.Group>
                                    <Form.Group controlId="parentCategoryName">
                                        <Form.Label>parentCategoryName</Form.Label>
                                        <Form.Control value={this.state.parentCategoryName}
                                            onChange={(e) => { this.setState({ parentCategoryName: e.target.value }) }}
                                            placeholder="parentCategoryName" />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>id</Form.Label>
                                        <Form.Control value={this.state.id}
                                            onChange={(e) => { this.setState({ id: e.target.value }) }}
                                            placeholder="id" />
                                    </Form.Group>
                                    <Button onClick={this.handleClick} variant="primary" >
                                        ثبت
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

});

export default connect(mapStateToProps, { addCategory })(AddCategory);