import React, { Component } from "react";
import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';

const routes = {
    '/': 'Home',
    '/backgrounds': 'Backgrounds',
    '/classes': 'Classes',
    '/feats': 'Feats',
    '/items': 'Items',
    '/races': 'Races',
    '/spells': 'Spells',
    '/characters': 'Characters'
}

class BreadcrumbComponent extends Component {
    render () {
        return (
            <Breadcrumbs mappedRoutes={routes} />
        );
    }
}

export default BreadcrumbComponent;