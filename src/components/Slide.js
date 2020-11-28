import React from 'react';
import '../css/Slide.css';
import anime from "animejs"
var db = require("../data/db.json")


export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getSlide = () => {
        let x = db.filter(elem => elem.year === this.props.year)
        console.log(x)
        let final = {}
        if (x.length > 1)
            final = x.find(elem => elem.month === this.props.month)
        else
            final = x[0]

        console.log(final)
        return final
    }

    slide = this.getSlide()

    render() {
        return (
            <>
                <div className="slide" style={{ backgroundImage: `url(${this.slide.image})` }}>
                    <div class="container" onclick={() => this.x}>
                        <span style={{ backgroundImage: `url(${this.slide.image})` }}></span>
                        <span style={{ backgroundImage: `url(${this.slide.image})` }}></span>
                        <span style={{ backgroundImage: `url(${this.slide.image})` }}></span>
                        <span style={{ backgroundImage: `url(${this.slide.image})` }}></span>
                    </div>
                    <div class="text-content">
                        <div>{JSON.stringify(this.slide)}</div>
                        <div>A</div>
                    </div>

                </div>
            </>
        );
    }
}