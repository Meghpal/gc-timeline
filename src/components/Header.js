import { KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import '../css/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occupy: false
        };
    }

    render() {
        return (
            <header className={this.state.occupy ? "" : "free"}>
                <div>Technology and Impact - India</div>
                {this.state.occupy && <KeyboardArrowDown />}
            </header>
        );
    }
}