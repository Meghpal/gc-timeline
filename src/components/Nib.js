import React from 'react';
import '../css/Nib.css';

export default class Nib extends React.Component {
    render() {
        return (
            <div tabIndex="0"
                role="button"
                className={this.props.selected ? "time-nib current" : "time-nib"}
                onClick={this.props.onClick}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === "Spacebar" || e.key === " ")
                        this.props.onClick()
                }}>
                <span>
                    {this.props.year}
                </span>
            </div >
        );
    }
}