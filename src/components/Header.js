import { KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import '../css/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occupy: true
        };
    }

    componentDidMount() {
        window.addEventListener('click', () => this.setState({ occupy: false }));
    }

    render() {
        return (
            <header className={this.state.occupy ? "" : "free"} >
                <div>AA</div>
                {this.state.occupy && <KeyboardArrowDown />}
            </header>
        );
    }
}