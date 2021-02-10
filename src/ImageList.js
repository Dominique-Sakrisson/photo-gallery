import React, { Component } from 'react';
import ImageItem from '../src/ImageItem.js';

export default class ImageList extends Component {
 
    render() {
        return (
            <>
            {
                this.props.images.map((image) => {
                 return <ImageItem key={image.title} image={image}/>
              })
            }
            </>
        );
    }
}
