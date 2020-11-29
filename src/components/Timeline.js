import Slide from './Slide';
import React from 'react';
import Nib from './Nib';
import '../css/Timeline.css';
var db = require("../data/db.json")

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2020,
            month: 10
        };
        this.slides = [];
        this.last_y = null;
        this.last_m = null;
        this.last_key = null;
        this.nibs = [];
        for (let i in db) {
            this.nibs.push(<Nib
                key={i}
                year={db[i].year}
                month={db[i].month}
                onClick={() => {
                    console.log("nib")
                    this.setState({ year: db[i].year, month: db[i].month });
                }} />)
        }
    }

    manageSlides = (year, month) => {
        if (year === this.last_y && month === this.last_m)
            return
        if (this.slides.length === 0) {

        } else {
            this.slides[this.slides.length - 1] = <Slide
                key={this.last_key}
                year={this.last_y}
                month={this.last_m}
                destroy={true}
            />

            if (this.slides.length > 2) {
                this.slides = this.slides.slice(1)
            }
        }
        this.last_key = String(month) + String(year) + String(Math.random())
        this.slides.push(<Slide key={this.last_key} year={year} month={month} />)
        this.last_y = year
        this.last_m = month
    }

    render() {
        this.manageSlides(this.state.year, this.state.month)
        console.log(this.slides)
        return (
            <>
                <div className="time-line">
                    {this.slides}
                </div>
                <div className="selection">
                    {this.nibs}
                </div>
            </>
        );
    }
}