import React from 'react';
import '../css/Slide.css';
var db = require("../data/db.json")

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            come: true,
            go: false
        };
        this.slide = this.getSlide();
        this.split = [];
        this.no = window.innerWidth > 768 ? 5 : 3;
        for (let i = 0; i < this.no; i++) {
            this.split.push(<span
                key={i}
                style={{ backgroundImage: `url(${this.slide.image})`, transitionDelay: i * 0.1 + "s" }}>
            </span>)
        };
    }

    getSlide = () => {
        let x = db.filter(elem => elem.year === this.props.year)
        let final = {}
        if (x.length > 1)
            final = x.find(elem => elem.month === this.props.month)
        else
            final = x[0]
        return final
    }

    componentDidMount = () => {
        setTimeout(() =>
            this.setState({ come: false }), 100)
    }

    componentWillUnmount() {
        console.log("dies")
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        if (this.props.destroy)
            setTimeout(() => this.setState({ go: true }), 500 + this.no * 100)
        return (
            this.state.go ?
                <></>
                :
                <>
                    <div className={this.props.destroy ? "slide go" : this.state.come ? "slide come" : "slide"}>
                        <div className={this.props.destroy ? "container go" : this.state.come ? "container come" : "container"}>
                            {this.split}
                        </div>
                        <div className="text-content">
                            <div>{JSON.stringify(this.slide)}</div>
                            <div>A</div>
                        </div>

                    </div>
                </>
        );
    }
}