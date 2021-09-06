import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editCategory } from '../Actions/CategoryAction';
import api from '../api';

class DetailCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            parentCategoryId: 0,
            parentCategoryName: '',
            id: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        api.get(`Categories/${id}`)
            .then(res => {
                this.setState({
                    name: res.data.data.name,
                    parentCategoryId: res.data.data.parentCategoryId,
                    parentCategoryName: res.data.data.parentCategoryName
                })
            })
            .catch(error => {
            });
    }

    handleClick() {
        const category = {
            id: this.props.match.params.id,
            name: this.state.name,
            parentCategoryId: this.state.parentCategoryId,
            parentCategoryName: this.state.parentCategoryName
        };

        this.props.editCategory(category);
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

});

export default connect(mapStateToProps, { editCategory })(DetailCategory);