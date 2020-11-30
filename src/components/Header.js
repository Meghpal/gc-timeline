import { TouchAppRounded } from '@material-ui/icons';
import React from 'react';
import '../css/Header.css';
import { BounceLoader } from 'react-spinners';

export default function Header(props) {
    return (
        <header className={props.occupy ? "" : "free"} onClick={() => props.setOccupy(false)}>
            <div className="header-title">Technology and Impact - India</div>
            { props.occupy
                &&
                <div className="p-container">
                    <TouchAppRounded />
                    <BounceLoader color={"#88797920"} size={"20vh"} />
                </div >
            }
        </header >
    );
}