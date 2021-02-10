import React, { Component } from 'react'

export default class ImageList extends Component {
 
    render() {
        return (
            <img src={this.props.image.url} alt={this.props.image.description} />
        );
    }
}
