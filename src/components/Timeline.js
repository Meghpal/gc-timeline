import Slide from './Slide';
import React from 'react';
import '../css/Timeline.css';

const CreateSlide = ({ year, month }) => {
    return <Slide year={year} month={month} />
}

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="time-line">
                <CreateSlide year={2020} month={10} />
            </div>
        );
    }
}