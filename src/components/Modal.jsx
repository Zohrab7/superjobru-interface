import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import "../styles/index.scss";

export default class Modal extends Component {
    render() {
        return (
            <section className="Modal" style={{display: this.props.display}}>
                <section className="Modal__Container">
                    <section className="Modal__Main">
                        <section className="Modal__Header">
                            <section className="Modal__Header__Name">
                                <h3>Новый проект</h3>
                            </section>
                            <section className="Modal__Header__Close" onClick={this.props.windowPopUp()}>
                                <FontAwesomeIcon
                                    className="Modal__Header__Close_Icon"
                                    color="grey"
                                    icon={faTimes}
                                    size="1x"
                                />
                            </section>
                        </section>
                        <section className="Modal__Content">
                            <input className="Modal__Content__Input" placeholder="Новый проект"/>
                            <section className="Modal__Content__Create">
                                <button className="Modal__Content__Create__Btn">СОЗДАТЬ</button>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }

};