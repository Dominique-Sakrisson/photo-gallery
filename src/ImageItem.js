import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="image-div">
                 <img src={this.props.image.url} alt={this.props.image.description} />
                <p>{this.props.image.description}</p>
            </div>
        );
    }
}
