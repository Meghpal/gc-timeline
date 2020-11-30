import React from 'react';
import { DotLoader } from 'react-spinners';
import '../css/Slide.css';
let db = require("../data/db.json")

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            come: true,
            go: false,
            loading: true
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
        const img = new Image();
        img.src = this.slide.image;
        this.setState({ loading: true })
        img.onload = () => {
            this.setState({ loading: false });
            this.t1 = setTimeout(() => this.setState({ come: false }), 100);
        }

    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
        clearTimeout(this.t1)
        clearTimeout(this.t2)
    }

    render() {
        if (this.props.destroy && !this.state.go)
            this.t2 = setTimeout(() => this.setState({ go: true }), 500 + this.no * 100)
        return (
            this.state.go ?
                <></>
                :
                this.state.loading ?
                    <div className="load-container">
                        <DotLoader
                            color={"#ffffff"}
                            size={"10vh"}
                            loading={this.state.loading}
                        />
                    </div> :
                    <>
                        <div className={this.props.destroy ? "slide go" : this.state.come ? "slide come" : "slide"}>
                            <div className={this.props.destroy ? "container go" : this.state.come ? "container come" : "container"}>
                                {this.split}
                            </div>
                            <div className="text-content">
                                <div className="text-title">{this.slide.title}</div>
                                <div className="text-desc">{this.slide.description}</div>
                            </div>

                        </div>
                    </>
        );
    }
}