import React, { Component } from 'react'

export default class ImageList extends Component {
 
    render() {
        return (
            <div className="image-div">
                <img src={this.props.image.url} alt={this.props.image.description} />
                <p>{this.props.image.description}</p>
            </div>
        );
    }
}
