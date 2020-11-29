import React from 'react';
import '../css/Nib.css';

export default class Nib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occupy: false
        };
    }

    render() {
        return (
            <div className="time-nib" onClick={this.props.onClick}>
            </div>
        );
    }
}