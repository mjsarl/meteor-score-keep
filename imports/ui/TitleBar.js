import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSub () {
        if(this.props.subtitle) {
            return (
                <h4 className="title-bar__subtitle">
                {this.props.subtitle}
                </h4>);
        }
    }
    
    render() {
        return (
        <div className="title-bar">
            <div className="wrapper">
                <h1>{this.props.title}</h1>
                {this.renderSub()}
            </div>
            
        </div>
    )}
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title: 'Default Title'
}