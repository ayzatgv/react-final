import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteCategory } from '../Actions/CategoryAction';
import { Link } from 'react-router-dom';

class GetCategory extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.deleteCategory(id);
    }

    render() {
        let Tableee = this.props.Categories.map((item) => {
            return (
                <tr key={item.id} >
                    <td><Button onClick={() => this.handleClick(item.id)} variant="primary" >Delete</Button></td>
                    <td><Link to={`/category/detail/${item.id}`}><Button variant="primary" >Edit</Button></Link></td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.parentCategoryId}</td>
                    <td>{item.parentCategoryName}</td>
                </tr>
            );
        })
        return (
            <div style={{ paddingLeft: '7%', paddingTop: 20, paddingRight: '7%' }}>
                <Row>
                    <Link to={`/category/add`} className="px-3 pb-2"><Button variant="primary" >Add</Button></Link>
                </Row>
                <Row>
                    <Col >
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>parentCategoryId</th>
                                    <th>parentCategoryName</th>
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
        Categories: state.Categories.items
    }
}

export default connect(mapStateToProps, { deleteCategory })(GetCategory);