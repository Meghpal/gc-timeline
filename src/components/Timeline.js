import Slide from './Slide';
import React from 'react';
import Nib from './Nib';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../css/Timeline.css';
let db = require("../data/db.json")

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 1900,
            month: 1
        };
        this.slides = [];
        this.last_y = null;
        this.last_m = null;
        this.last_key = null;
        this.nibs = [];
        db = db.filter(elem => elem.title !== "");
        db.sort((a, b) => {
            if (a.year < b.year) {
                return -1;
            }
            else if (a.year === b.year) {
                if (a.month < b.month) {
                    return -1;
                } else {
                    return 1
                }
            }
            else {
                return 1;
            }
        });
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

        this.nibs = []
        for (let i in db) {
            this.nibs.push(<Nib
                key={i}
                year={db[i].year}
                month={db[i].month}
                selected={this.state.year === db[i].year}
                onClick={() => {
                    this.setState({ year: db[i].year, month: db[i].month });
                }} />)
        }
        return (
            <>
                <div className="time-line">
                    {this.slides}
                </div>
                <div className="selection">
                    <ScrollContainer className="scroll-container">
                        <div className="nib-container">
                            {this.nibs}
                        </div>
                    </ScrollContainer>
                </div>
            </>
        );
    }
}