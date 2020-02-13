import React, { Component } from "react";
import { Breadcrumb } from 'react-bootstrap';

class BreadcrumbComponent extends Component {
    render () {
        return (
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Backgrounds</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default BreadcrumbComponent;