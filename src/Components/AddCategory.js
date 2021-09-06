import React, { Component } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCategory } from '../Actions/CategoryAction';

class AddCategory extends Component {
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

    handleClick() {
        if(this.state.name === '' || this.state.parentCategoryId === 0)
        {
            alert('فیلدها را پرکنید')
        }
        
        const data = {
            name: this.state.name,
            parentCategoryId: this.state.parentCategoryId,
            parentCategoryName: this.state.parentCategoryName,
            id: this.state.id
        };

        this.props.addCategory(data);
    }

    render() {
        let Categories = this.props.Categories.map(
            (item) => {
                return (
                    <option key={item.id} value={item.id} name={item.name}>{item.name}</option>
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
                                    <Form.Group controlId="name">
                                        <Form.Label>name</Form.Label>
                                        <Form.Control value={this.state.name}
                                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                                            placeholder="name" />
                                    </Form.Group>
                                    <Form.Group controlId="parentCategoryId">
                                        <Form.Label>parentCategory</Form.Label>
                                        <Form.Control onChange={(e) => { this.setState({ parentCategoryId: e.target.value, parentCategoryName: e.target.options[e.target.selectedIndex].text }) }} as="select">
                                            <option value={0}>یک گزینه را انتخاب کنید</option>
                                            {Categories}
                                        </Form.Control>
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
    Categories: state.Categories.items
});

export default connect(mapStateToProps, { addCategory })(AddCategory);