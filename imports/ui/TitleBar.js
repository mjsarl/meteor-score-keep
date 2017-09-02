import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSub () {
        if(this.props.subtitle) {
            return <h4>{this.props.subtitle}</h4>;
        }
    }
    
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            {this.renderSub()}
        </div>
    )}
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title: 'Default Title'
}